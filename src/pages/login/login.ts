import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { MainPage } from '../main/main';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild('username') uname;
  @ViewChild('password') pword;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Login(){
    if(this.uname.value == "Ucejtech" && this.pword.value == "Jerem1ah"){
      //this.navCtrl.push(MainPage)
      let alert = this.alertCtrl.create({
        title: 'Login Successful',
        subTitle: 'Welcome '+this.uname.value,
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.push(MainPage)
    }else{
      console.log("Error in details");
    }
  }

  back(){
    this.navCtrl.pop()
  }
  Register(){
  	this.navCtrl.push(SignupPage)
  }
}