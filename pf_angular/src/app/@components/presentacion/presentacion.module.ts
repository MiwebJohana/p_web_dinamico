import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentacionComponent } from './presentacion.component';



@NgModule({
  declarations: [
    PresentacionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [PresentacionComponent]
})
export class PresentacionModule { }
