import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TratamentosPage } from './tratamentos';

@NgModule({
  declarations: [
    TratamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(TratamentosPage),
  ],
})
export class TratamentosPageModule {}
