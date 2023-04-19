import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsCursosComponent } from './modals-cursos.component';



@NgModule({
  declarations: [
    ModalsCursosComponent
  ],
  exports: [ModalsCursosComponent],
  imports: [
    CommonModule
  ]
})
export class ModalsCursosModule { }
