import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormacionProfesionalComponent } from './formacion-profesional.component';
import { ModalsFormacionPModule } from './modals-formacion-p/modals-formacion-p.module';
import { ModalTitulosModule } from '../1.modal-titulos/modal-titulos.module';




@NgModule({
  declarations: [
    FormacionProfesionalComponent
  ],
  exports: [FormacionProfesionalComponent],
  imports: [
    CommonModule,
    ModalsFormacionPModule,
    ModalTitulosModule,
  ]
})
export class FormacionProfesionalModule { }
