import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { ModalRightPage } from '../modal-right/modal-right';
import { ModalScalePage } from '../modal-scale/modal-scale';

@Component({
    templateUrl: './modal-demo.html'
})

export class ModalDemoPage {
    constructor(private modalCtrl: ModalController) {

    }



    showModal1() {
        this.modalCtrl.create(ModalRightPage, {}, {
            enterAnimation: 'modal-from-right-enter',
            leaveAnimation: 'modal-from-right-leave'
        }).present();
    }

    showModal2() {
        this.modalCtrl.create(ModalScalePage, {}, {
            enterAnimation: 'modal-scale-enter',
            leaveAnimation: 'modal-scale-leave'
        }).present();
    }
}