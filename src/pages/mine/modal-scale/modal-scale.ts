import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    templateUrl: './modal-scale.html'
})

export class ModalScalePage{
    constructor(private viewCtrl: ViewController){
        
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}