import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RestApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestApiServiceProvider { 

  constructor(public http: Http) {
    console.log('Hello RestApiServiceProvider Provider');
  }

  Login(Matricula,Senha) {  
    return this.http.get("http://localhost:50039/api/Aluno/Autentica/?Matricula="+Matricula+"&Senha="+Senha+"").map(res => res.json());
  }  
}
