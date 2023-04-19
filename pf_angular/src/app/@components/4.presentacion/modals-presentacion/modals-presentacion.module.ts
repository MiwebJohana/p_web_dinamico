import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsPresentacionComponent } from './modals-presentacion.component';



@NgModule({
  declarations: [
    ModalsPresentacionComponent
  ],
  exports: [ModalsPresentacionComponent],
  imports: [
    CommonModule
  ]
})
export class ModalsPresentacionModule { }
