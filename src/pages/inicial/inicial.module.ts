import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InicialPage } from './inicial';

@NgModule({
  declarations: [
    InicialPage,
  ],
  imports: [
    IonicPageModule.forChild(InicialPage),
  ],
})
export class InicialPageModule {}
