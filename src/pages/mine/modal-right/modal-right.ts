import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: './modal-right.html'
})

export class ModalRightPage{
    constructor(private viewCtrl: ViewController){
        
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}