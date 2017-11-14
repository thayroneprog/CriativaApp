import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestApiServiceProvider } from '../../providers/rest-api-service/rest-api-service';
import { NavParams } from 'ionic-angular/navigation/nav-params';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers:[
    RestApiServiceProvider
  ]
})
export class NotaPage {

  public aluno:any[];
  public matricula: string;

  constructor(public navCtrl: NavController, private restApiService:RestApiServiceProvider, public navParams:NavParams) {

  }

  ionViewDidLoad(){
    this.matricula = this.navParams.get('matricula');
    this.notaSimulado();
  }

  notaSimulado(){
    this.restApiService.NotaAluno().subscribe(data => {
      this.aluno = data;
      console.log(this.aluno);
    },error => {
      console.log(error);
    });
  }
  

}
