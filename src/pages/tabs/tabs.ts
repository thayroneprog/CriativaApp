import { Component } from '@angular/core';

import { NotaPage } from '../about/about';
import { AgendaPage } from '../contact/contact';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = NotaPage;
  tab3Root = AgendaPage;
  

  constructor() {

  }
}
