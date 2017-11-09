import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';


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
  providers:[RestApiServiceProvider]
})
export class LoginPage {  
  var:boolean;
  splash = true;
  public Matricula:any;
  Senha:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public http: Http, private restApiService:RestApiServiceProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    setTimeout(() => this.splash = false, 4000);   
  }

  presentToast() {
    const toast = this.toastCtrl.create({
      message: 'Falha ao fazer o login',
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

  login():void{
    this.restApiService.Login(this.Matricula,this.Senha).subscribe(data => {  
      if(data){
        this.navCtrl.setRoot(TabsPage,{
         matricula : this.Matricula 
        }); 
      }else{
        this.presentToast();   
      }
    }, error => {
      console.log(error);
      this.presentToast();
    });   
  }
}
