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
}