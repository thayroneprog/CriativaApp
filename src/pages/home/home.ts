import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  aluno:any;

  myAboutParam: any;
 
  constructor(public navCtrl: NavController, public http: Http, public navParams:NavParams, private restApiService:RestApiServiceProvider) {
 
    // // this.http.get('https://www.reddit.com/r/gifs/new/.json?limit=10').map(res => res.json()).subscribe(data => {
    // //     this.posts = data.data.children;
    // // });
    // console.log(this.user.Matricula);
  }

  ionViewDidLoad(){
    this.myAboutParam = this.navParams.get('login');
    console.log(this.myAboutParam);
    
    
    this.buscaAluno();
  }

  buscaAluno():void{
    this.restApiService.NotaAluno().subscribe(data => {
      this.aluno = data.results;
      console.log(data);
    },
      error =>{
        console.log(error);
      });
  }
}