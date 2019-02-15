import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { MinePage } from './mine';
import { ModalDemoPage } from './modal-demo/modal-demo';
import { ModalRightPage } from './modal-right/modal-right';
import { ModalScalePage } from './modal-scale/modal-scale';

@NgModule({
    imports: [IonicModule],
    declarations: [MinePage, ModalRightPage, ModalScalePage, ModalDemoPage],
    entryComponents: [MinePage, ModalRightPage, ModalScalePage, ModalDemoPage],
    exports: [IonicModule]
})
export class MineModule {
}