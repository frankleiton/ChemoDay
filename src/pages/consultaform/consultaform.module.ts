import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaformPage } from './consultaform';

@NgModule({
  declarations: [
    ConsultaformPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaformPage),
  ],
})
export class ConsultaformPageModule {}
