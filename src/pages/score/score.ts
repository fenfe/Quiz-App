import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataStoreProvider } from '../../providers/data-store/data-store';
import { CategoriesPage } from '../categories/categories';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';


@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  score: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dataS: DataStoreProvider) {
  }
  


  ionViewDidLoad() {
    this.score = this.dataS.grandTotal;
  }
  reset(){
    this.score= 0;
    this.navCtrl.push(CategoriesPage);
  }
  
backhome(){
  this.navCtrl.push(HelloIonicPage);
}
}
