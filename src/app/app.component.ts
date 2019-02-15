import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Events, IonicApp, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

import { DataBaseProvider } from '../providers/data-base/data-base';
import { AppConfig } from '../common/appConfig';
import { Keyboard } from '@ionic-native/keyboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = TabsPage;

  public appCfg: AppConfig;
  backButtonPressed: boolean = false;//返回按钮是否点击
  @ViewChild(Nav) nav: Nav;

  constructor(private platform: Platform,
    private statusBar: StatusBar,
    private splashScreen: SplashScreen,
    public dbSvr: DataBaseProvider,
    public events: Events,
    private keyboard: Keyboard,
    private ionicApp: IonicApp,
    private toastCtrl: ToastController) {
    this.appCfg = AppConfig.getInstance();

    this.initializeApp();
  }

  /*初始化App*/
  initializeApp() {
    let isMobile = this.platform.is('mobile');//是否为移动设备
    this.appCfg.setIsMobile(isMobile);
    this.appCfg.setIsAndroid(this.platform.is('android'));
    this.appCfg.setIsIOS(this.platform.is('ios'));

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.dbSvr.openDB();
      this.registerBackButtonAction();
    });
  }

  // 修改android返回按钮事件,逐级退出路由,而不是直接退出App,API仅支持android系统
  registerBackButtonAction() {
    if (!this.platform.is('android')) {
      return;
    }

    this.platform.registerBackButtonAction(() => {
      this.events.publish('android:backButtonAction');
      if (this.keyboard.isVisible) {//如果键盘开启则隐藏键盘
        this.keyboard.hide();
        return;
      }

      //如果想点击返回按钮隐藏toast或loading或Overlay就把下面加上
      // this.ionicApp._toastPortal.getActive() ||this.ionicApp._loadingPortal.getActive()|| this.ionicApp._overlayPortal.getActive()
      let activePortal = this.ionicApp._modalPortal.getActive() || this.ionicApp._overlayPortal.getActive();
      if (activePortal) {
        activePortal.dismiss();
        return;
      }
      let tabs = this.nav.getActiveChildNav();//获取tabs导航,this.nav是总导航,tabs是子导航
      let tab = tabs.getSelected();//获取选中的tab
      let activeVC = tab.getActive();//通过当前选中的tab获取ViewController
      let activeNav = activeVC.getNav();//通过当前视图的ViewController获取的NavController
      return activeNav.canGoBack() ? activeNav.pop() : this.showExit();//this.showExit()

    }, 1);
  }

  /**双击返回按钮退出确认 */
  private showExit() {
    if (this.backButtonPressed) {
      this.platform.exitApp();
      return;
    } else {
      let toast = this.toastCtrl.create({
        message: '再按一次退出应用',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
      this.backButtonPressed = true;
      setTimeout(() => { this.backButtonPressed = false }, 2000);//2秒内没有再次点击返回则将触发标志重置
    }
  }

}
