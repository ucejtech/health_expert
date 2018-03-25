import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  splash = true;

  constructor(public navCtrl: NavController) {

  }

  ionViewDidLoad() {
    setTimeout(() => this.splash = false, 4000);
  }

  Login(){
  	this.navCtrl.push(LoginPage)
  }

  Signup(){
  	this.navCtrl.push(SignupPage)
  }

}
