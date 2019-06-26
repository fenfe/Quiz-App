import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { ScorePage } from '../score/score';

@IonicPage()
@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
})


export class Page1Page {
@ViewChild('slides') slides: Slides;
title: string;
questions: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataS: DataStoreProvider) { }

    
  ionViewDidLoad() {
    this.title = this.navParams.data;
    this.questions = this.dataS.getData;
    console.log('From Page1 = ', this.dataS.getData);
    
  }
  getAnswer(value){
    if (value){
      this.dataS.setTotal(20);
    } else {
      console.log('Incorrect');
      
    }
    this.slides.slideNext();
  }
  seeTotal(){
    this.navCtrl.push(ScorePage);
  }
}
