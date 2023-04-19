import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsSobreMiComponent } from './modals-sobre-mi.component';



@NgModule({
  declarations: [
    ModalsSobreMiComponent
  ],
  exports: [ModalsSobreMiComponent],
  imports: [
    CommonModule
  ]
})
export class ModalsSobreMiModule { }
