import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicamentosPage } from './medicamentos';

@NgModule({
  declarations: [
    MedicamentosPage,
  ],
  imports: [
    IonicPageModule.forChild(MedicamentosPage),
  ],
})
export class MedicamentosPageModule {}
