import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from "@ionic-native/camera";
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Observable } from "rxjs";
import { IMAGE_SIZE, QUALITY_SIZE, UPDATE_URL } from '../../common/constants';
import { AppConfig } from "../../common/appConfig";
import { AlertController } from "ionic-angular";
import { AppVersion } from '@ionic-native/app-version';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
import { NFC } from '@ionic-native/nfc';
import { HttpServiceProvider } from '../http-service/http-service';
import { UiHelperProvider } from '../ui-helper/ui-helper';

/*
  Generated class for the NativeProvidersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NativeProvidersProvider {
    appCfg: AppConfig = AppConfig.getInstance();
    updateProgress = -1;    //下载进度

    constructor(
        private bcScan: BarcodeScanner,
        private camera: Camera,
        private httpService: HttpServiceProvider,
        private appver: AppVersion,
        private alertCtrl: AlertController,
        private uiHelper: UiHelperProvider,
        private transfer: FileTransfer,
        private file: File,
        private fileOpener: FileOpener,
        private nfc: NFC
    ) {

    }

    /**条码/二维码扫描 */
    barcodeScan(): Observable<string> {
        return Observable.create(observer => {
            this.bcScan.scan({
                prompt: '请将矩形扫描框对准二维码/条码',
                showTorchButton: true, //显示打开闪光灯按钮
                showFlipCameraButton: true, //显示切换摄像头按钮
                resultDisplayDuration: 0//显示扫描文本的时间,0表示禁用,仅支持安卓
            }).then((res) => {
                if (res.cancelled) {
                    return;//手动取消
                }
                observer.next(res.text);
            }).catch((err) => {
                observer.error(err);
            });
        });
    }

    /**
     * 使用cordova-plugin-camera获取照片,返回base64字符串
     * @param options 
     */
    private getPicture(options: CameraOptions): Observable<string> {
        let opts: CameraOptions = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,   //图片来源,CAMERA:拍照;PHOTOLIBRARY:相册
            destinationType: this.camera.DestinationType.DATA_URL,  //默认返回base64字符串,DATA_URL:base64  FILE_URI:图片路径
            quality: QUALITY_SIZE, //图像质量,范围为0~100
            allowEdit: false, //选择图片前是否允许编辑
            encodingType: this.camera.EncodingType.JPEG,
            targetWidth: IMAGE_SIZE,  //缩放图像的宽度(像素)
            targetHeight: IMAGE_SIZE, //缩放图像的高度(像素)
            saveToPhotoAlbum: false,  //是否保存到相册
            correctOrientation: true  //设置相机拍摄的图像是否为正确的方向
        }, options);

        return Observable.create(observer => {
            this.camera.getPicture(opts).then((imgData: string) => {
                if (opts.destinationType === this.camera.DestinationType.DATA_URL) {
                    observer.next('data:image/jpg;base64,' + imgData);
                } else {
                    observer.next(imgData);
                }
            }).catch((err) => {
                if (err == 20) {
                    observer.error('没有权限,请在设置中开启相机权限');
                    return;
                }
                if (String(err).indexOf('cancel') > -1) {
                    return;
                }
                if (String(err).indexOf('No Image Selected') > -1) {
                    return;
                }
                observer.error(err);
            });
        });
    }//end getPicture

    /**
     * 通过拍照获取图片
     * @param options 
     */
    getPictureByCamera(options: CameraOptions = {}): Observable<string> {
        let opts: CameraOptions = Object.assign({
            sourceType: this.camera.PictureSourceType.CAMERA,
            destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(opts);
    }

    /**
     * 通过相册选图图片
     * @param options 
     */
    getPictureByPhotoLibrary(options: CameraOptions = {}): Observable<string> {
        let opts: CameraOptions = Object.assign({
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL//DATA_URL: 0 base64字符串, FILE_URI: 1图片路径
        }, options);
        return this.getPicture(opts);
    }

    /********************* 在线升级App ************************* */
    /**检查更新 */
    checkUpdate() {
        if (this.updateProgress > -1 && this.updateProgress < 100) {
            let alert = this.alertCtrl.create({
                title: `下载进度:${this.updateProgress}%`,
                buttons: [{ text: '后台下载' }]
            });
            alert.present();
            let interval = setInterval(() => {
                alert.setTitle(`下载进度:${this.updateProgress}`);
                if (this.updateProgress == 100) {
                    clearInterval(interval);
                    alert && alert.dismiss();
                }
            }, 500);
        } else {
            this.httpService.getXml(UPDATE_URL, null).then((res) => {
                if (res.success) {
                    let svrVer = res.data[0].android.version;
                    let apkUrl = res.data[0].android.url;
                    this.getAppVerNum().subscribe(ver => {
                        if (ver < svrVer) {
                            this.alertCtrl.create({
                                title: '升级',
                                subTitle: '发现新版本 ' + svrVer + ',是否立即升级？',
                                buttons: [{ text: '忽略' },
                                {
                                    text: '立即升级',
                                    handler: () => {
                                        this.downloadApp(apkUrl);
                                    }
                                }
                                ]
                            }).present();
                        } else {
                            this.uiHelper.alert("已更新到最新版本!");
                        }
                    }, err => {
                        this.uiHelper.alert(err);
                    });
                }
            });
        }
    }//checkupdate

    /**获取当前App的版本号 */
    getAppVerNum(): Observable<string> {
        return Observable.create(observe => {
            this.appver.getVersionNumber().then((res) => {
                observe.next(res);
            }, (err) => {
                observe.error(err);
            });
        });
    }

    /**
     * 下载App,目前仅实现安卓设备
     * @param url 
     */
    private downloadApp(url) {
        if (this.appCfg.isAndroid) {
            let backgroundProgress = false;//是否后台下载
            let alert = this.alertCtrl.create({
                title: '下载进度：0%',
                enableBackdropDismiss: false,
                buttons: [{
                    text: '后台下载', handler: () => {
                        backgroundProgress = true;
                    }
                }]
            });
            alert.present();

            const fileTransfer: FileTransferObject = this.transfer.create();
            const apk = this.file.externalRootDirectory + 'download/android.apk';//apk保存的目录
            fileTransfer.download(url, apk).then((entry) => {
                alert && alert.dismiss();
                this.fileOpener.open(entry.toURL(), 'application/vnd.android.package-archive').then(() => {
                    console.log('success');
                }, (err) => {
                    this.uiHelper.alert("应用安装失败", err);
                });
            }, (err) => {
                this.updateProgress = -1;
                alert && alert.dismiss();
                this.uiHelper.alert("本地升级失败", err);
            }).catch((err) => {
                alert && alert.dismiss();
                this.uiHelper.alert("本地升级失败", err);
            });

            let timer = null;
            fileTransfer.onProgress((event: ProgressEvent) => {
                let num = Math.floor(event.loaded / event.total * 100);
                this.updateProgress = num;
                if (!timer) {
                    timer = setTimeout(() => {
                        if (num === 100) {
                            alert.dismiss();
                        }
                        else {
                            if (!backgroundProgress)
                                alert.setTitle(`下载进度：${num}%`);
                        }
                        clearTimeout(timer);
                        timer = null;
                    }, 500);
                }
            });
        }
    }//downloadApp

    nfcTouch(): Observable<string> {
        return Observable.create(observer => {
            this.nfc.addTagDiscoveredListener(() => {
                console.log('successfully attached ndef listener');
            }, (err) => {
                observer.error(err);
            }).subscribe((data) => {
                if (data && data.tag && data.tag.id) {
                    var tagId = this.nfc.bytesToHexString(data.tag.id);
                    observer.next(tagId);
                }
                else {
                    observer.error('NFC_NOT_DETECTED');
                }
            }, (err) => {
                observer.error(err);
            });
        });
    }
}
