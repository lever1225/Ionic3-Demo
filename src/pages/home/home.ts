import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpServiceProvider } from '../../providers/http-service/http-service';
import { UPDATE_URL } from '../../common/constants';
import { UiHelperProvider } from '../../providers/ui-helper/ui-helper';
import { DataBaseProvider } from '../../providers/data-base/data-base';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController,
        public httpSvr: HttpServiceProvider,
        public uiHelper: UiHelperProvider,
        private dbSvr: DataBaseProvider
    ) {

    }

    ionViewWillEnter() {
        if (!this.dbSvr.Ins) {
            this.dbSvr.openDB().then((res) => {
                this.uiHelper.alert("Database has been opened.1.");
            }, (error) => {
                this.uiHelper.alert("Database initialization failed.", error);
            })
        } else {
            this.uiHelper.alert("Database has been opened.2.");
        }
    }

    getXmlCont() {
        // this.httpSvr.getXml(UPDATE_URL, null).then((res) => {
        //   if (res.success) {
        //     debugger;
        //     let svrVer = res.data[0].android.version;
        //     this.uiHelper.alert("服务器最新版本号:" + svrVer);
        //   } else {
        //     this.uiHelper.alert(res.msg);
        //   }
        // });

        this.uiHelper.loading(this.getVerId(), '数据加载中,请稍等...');
    }

    private getVerId(): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            this.httpSvr.getXml(UPDATE_URL, null).then((res) => {
                if (res.success) {
                    let svrVer = res.data[0].android.version;
                    resolve("服务器最新版本号:" + svrVer);
                } else {
                    this.uiHelper.alert(res.msg);
                    reject(res.msg);
                }
            });
        });
    }
}
