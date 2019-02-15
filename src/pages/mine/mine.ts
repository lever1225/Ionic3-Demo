import { Component } from '@angular/core';
import { ActionSheetController, NavController } from 'ionic-angular';
import { AppConfig } from '../../common/appConfig';
import { NFC } from '@ionic-native/nfc';
import { NativeProvidersProvider } from '../../providers/native-providers/native-providers';
import { UiHelperProvider } from '../../providers/ui-helper/ui-helper';
import { AppSettingProvider } from '../../providers/app-setting/app-setting';
import { ModalDemoPage } from './modal-demo/modal-demo';

@Component({
    templateUrl: './mine.html'
})
export class MinePage {
    appCfg: AppConfig = AppConfig.getInstance();
    user: UserModel;

    constructor(
        private nfc: NFC,
        private nativeSvr: NativeProvidersProvider,
        private uiHelper: UiHelperProvider,
        private appSet: AppSettingProvider,
        private act: ActionSheetController,
        private navCtrl: NavController
    ) {
        this.user = new UserModel();
        this.user.ImgPath = './assets/imgs/user.png';
    }

    ionViewWillEnter() {
        if (this.appCfg.UserId > 0) {
            this.getCurUser(this.appCfg.UserId);
        } else {
            this.clearCurUsr();
        }
    }

    /**重置当前登录用户 */
    private clearCurUsr() {
        this.user.UserId = 0;
        this.user.UserName = "未登录";
        this.user.ImgPath = './assets/imgs/user.png';
        this.user.LoginName = "";
        this.user.PatternPwd = "";
    }

    private getCurUser(userid) {
        this.appSet.getByUserId(userid).then((res) => {
            if (res && res.length == 1) {
                this.user.UserId = userid;
                this.user.UserName = res[0].UserName;
                this.user.ImgPath = res[0].ImgPath ? res[0].ImgPath : './assets/imgs/user.png';
                this.user.LoginName = res[0].LoginName;
                this.user.PatternPwd = res[0].PatternPwd;
            }
        });
    }
    /**修改头像 */
    changeImg() {
        let acts = this.act.create({
            buttons: [
                {
                    text: '从相册选择',
                    handler: () => {
                        this.getPicture(0);
                    }
                }, {
                    text: '拍照',
                    handler: () => {
                        this.getPicture(1);
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: () => { }
                }
            ]
        });

        acts.present();
    }

    private getPicture(ptype: number) {
        let options = {
            targetWidth: 400,
            targetHeight: 400,
            quality: 100,
            allowEdit: true
        };
        if (ptype === 1) {
            this.nativeSvr.getPictureByCamera(options).subscribe(imageBase64 => {
                this.appSet.updateUsrImg(this.appCfg.UserId, imageBase64);
                this.user.ImgPath = imageBase64;
            }, err => {
                this.uiHelper.simpleTip(err);
            });
        } else {
            this.nativeSvr.getPictureByPhotoLibrary(options).subscribe(imageBase64 => {
                this.appSet.updateUsrImg(this.appCfg.UserId, imageBase64);
                this.user.ImgPath = imageBase64;
            }, err => {
                this.uiHelper.simpleTip(err);
            });
        }
    }

    /**检查更新 */
    checkUpdate() {
        this.nativeSvr.checkUpdate();
    }

    touchTag() {
        this.nfc.enabled().then((resolve) => {
            this.nativeSvr.nfcTouch().subscribe((data) => {
                this.uiHelper.alert(data);
            }, (err) => {
                this.uiHelper.alert(err);
            });
        }).catch((error) => {
            this.uiHelper.alert(error);
        });
    }

    showModal(){
        this.navCtrl.push(ModalDemoPage);
    }
}

class UserModel {
    UserId: number;
    UserName: string;
    LoginName: string;
    ImgPath: string;
    PatternPwd: string;
}

