import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RestApiServiceProvider { 

  constructor(public http: Http) {
    console.log('Hello RestApiServiceProvider Provider');
  }

  Login(Matricula,Senha) {  
    return this.http.get("http://criativaws.gerenciarsc.com.br/api/Aluno/Autentica/?Matricula="+Matricula+"&Senha="+Senha+"").map(res => res.json());
  }
  
  NotaAluno(){
    return this.http.get("http://criativaws.gerenciarsc.com.br/api/aluno/ListarAlunoNota?Matricula=1229").map(res => res.json());
  }

  ListaFeed(){
    return this.http.get("http://localhost:50039/API/feed/listarfeed").map(res => res.json());
  }
}
