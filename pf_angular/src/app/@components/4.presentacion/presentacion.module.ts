import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionComponent } from './presentacion.component';
import { ModalsPresentacionModule } from './modals-presentacion/modals-presentacion.module';
import { ModalTitulosModule } from '../1.modal-titulos/modal-titulos.module';



@NgModule({
  declarations: [
    PresentacionComponent
  ],
  exports: [PresentacionComponent],
  imports: [
    CommonModule,
    ModalsPresentacionModule,
    ModalTitulosModule
  ]
 
})
export class PresentacionModule { }
