import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, Config } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite } from '@ionic-native/sqlite';
import { Keyboard } from '@ionic-native/keyboard';
import { NFC, Ndef } from '@ionic-native/nfc';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { AppVersion } from '@ionic-native/app-version';
import { FileTransfer } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';

import { NativeProvidersProvider } from '../providers/native-providers/native-providers';
import { DataBaseProvider } from '../providers/data-base/data-base';
import { HttpServiceProvider } from '../providers/http-service/http-service';
import { UiHelperProvider } from '../providers/ui-helper/ui-helper';
import { MineModule } from '../pages/mine/mine.module';
import { AppSettingProvider } from '../providers/app-setting/app-setting';
import { ModalScaleEnter, ModalScaleLeave, ModalFromRightEnter, ModalFromRightLeave } from "./modal-transitions";

@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        IonicModule.forRoot(MyApp, {
            backButtonText: '返回',
            mode: 'ios',
            tabsHideOnSubPages: true
        }),
        MineModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        Keyboard,
        NFC, Ndef,
        Camera,
        BarcodeScanner,
        AppVersion,
        FileTransfer,
        File,
        FileOpener,
        NativeProvidersProvider,
        SQLite,
        DataBaseProvider,
        HttpServiceProvider,
        UiHelperProvider,
        AppSettingProvider
    ]
})
export class AppModule {
    constructor(public config: Config) {
        this.setCustomTransitions();
    }

    /**自定义模态窗动画 */
    private setCustomTransitions() {
        this.config.setTransition('modal-scale-enter', ModalScaleEnter);
        this.config.setTransition('modal-scale-leave', ModalScaleLeave);
        this.config.setTransition('modal-from-right-enter', ModalFromRightEnter);
        this.config.setTransition('modal-from-right-leave', ModalFromRightLeave);
    }
}
