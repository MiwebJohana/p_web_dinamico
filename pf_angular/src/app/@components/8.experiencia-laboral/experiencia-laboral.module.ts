import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienciaLaboralComponent } from './experiencia-laboral.component';
import { ModalsExpLaboralModule } from './modals-exp-laboral/modals-exp-laboral.module';
import { ModalTitulosModule } from '../1.modal-titulos/modal-titulos.module';





@NgModule({
  declarations: [
    ExperienciaLaboralComponent
  ],
  exports: [ExperienciaLaboralComponent],
  imports: [
    CommonModule,
    ModalTitulosModule,
    ModalsExpLaboralModule,

  ]
  
})
export class ExperienciaLaboralModule { }
