import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducacionComponent } from './educacion.component';
import { ModalsEducacionModule } from './modals-educacion/modals-educacion.module';
import { ModalTitulosModule } from '../1.modal-titulos/modal-titulos.module';





@NgModule({
  declarations: [
    EducacionComponent
  ],
  exports: [EducacionComponent],
  imports: [
    CommonModule,
    ModalsEducacionModule,
    ModalTitulosModule,
  ]
  
})
export class EducacionModule { }
