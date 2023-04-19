import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalTitulosComponent } from './modal-titulos.component';



@NgModule({
  declarations: [
    ModalTitulosComponent
  ],
  exports: [ModalTitulosComponent],
  imports: [
    CommonModule
  ]
})
export class ModalTitulosModule { }
