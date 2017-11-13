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

  public data:any[];
  public matricula:string;
  myAboutParam: any;
 
  constructor(public navCtrl: NavController, public http: Http, public navParams:NavParams, private restApiService:RestApiServiceProvider) {
  }

  ngOnInit(){
    
  }

  ionViewDidLoad(){
    console.log(this.navParams.get('matricula'));
    this.matricula = this.navParams.get('matricula');
    console.log(this.matricula);
    this.buscaAluno();
  }

  buscaAluno():void{
    this.restApiService.NotaAluno(this.matricula).subscribe(data => {
     this.data = data.results; 
      console.log(data);
    },
      error =>{
        console.log(error);
      });
  }
}