import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsEducacionComponent } from './modals-educacion.component';



@NgModule({
  declarations: [
    ModalsEducacionComponent
  ],
  exports:[ ModalsEducacionComponent],
  imports: [
    CommonModule
  ]
})
export class ModalsEducacionModule { }
