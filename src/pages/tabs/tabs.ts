import { Component } from '@angular/core';

import { NotaPage } from '../about/about';
import { AgendaPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})

export class TabsPage { 
  
  myTabsParam: any;

  tab1Root = HomePage;
  tab2Root = NotaPage;
  tab3Root = AgendaPage;

  constructor(public navParams:NavParams) {
    
  }

  ionViewDidLoad(){
    this.myTabsParam = this.navParams.get('matricula');
    console.log(this.myTabsParam); 
  }
}

