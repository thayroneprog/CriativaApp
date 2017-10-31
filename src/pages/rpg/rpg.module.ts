import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RpgPage } from './rpg';

@NgModule({
  declarations: [
    RpgPage,
  ],
  imports: [
    IonicPageModule.forChild(RpgPage),
  ],
})
export class RpgPageModule {}
