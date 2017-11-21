import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers:[
    RestApiServiceProvider
  ]
})
export class HomePage implements OnInit{
  items = [
    {
      title: 'Courgette daikon',
      content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
      icon: 'calendar',
      time: {subtitle: '4/16/2013', title: '21:30'}
    },
    {
      title: 'Courgette daikon',
      content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
      icon: 'calendar',
      time: {subtitle: 'January', title: '29'}
    },
    {
      title: 'Courgette daikon',
      content: 'Parsley amaranth tigernut silver beet maize fennel spinach. Ricebean black-eyed pea maize scallion green bean spinach cabbage jícama bell pepper carrot onion corn plantain garbanzo. Sierra leone bologi komatsuna celery peanut swiss chard silver beet squash dandelion maize chicory burdock tatsoi dulse radish wakame beetroot.',
      icon: 'calendar',
      time: {title: 'Short Text'}
    }
  ]
  public data:any[];
  public feed: any[];
  public matricula:string;
  public alunoData:any;
  myAboutParam: any;
 
  constructor(public navCtrl: NavController, public http: Http, public navParams:NavParams, private restApiService:RestApiServiceProvider) {
  }

  ngOnInit(){
    
  }

  ionViewDidLoad(){
    this.matricula = this.navParams.get('matricula');
    console.log(this.matricula);
    this.buscaAluno();
    this.listaFeed();
  }

  buscaAluno():void{
    this.restApiService.NotaAluno().subscribe(data => {
     this.data = data; 
     this.alunoData = data;
      console.log(this.alunoData); 
    },
      error =>{
        console.log(error);
      });
  }

  listaFeed(){
    this.restApiService.ListaFeed().subscribe(data =>{
      this.feed = data;
      console.log(this.feed);
    },
      error =>{
        console.log(error);
      });
  }
 
}