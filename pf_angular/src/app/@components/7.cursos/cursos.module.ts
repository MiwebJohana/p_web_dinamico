import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { ModalsCursosModule } from './modals-cursos/modals-cursos.module';
import { ModalTitulosModule } from '../1.modal-titulos/modal-titulos.module';



@NgModule({
  declarations: [
    CursosComponent
  ],
  exports: [CursosComponent],
  imports: [
    CommonModule,
    ModalsCursosModule,
    ModalTitulosModule
  ]
 
})
export class CursosModule { }
