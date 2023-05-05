import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SobreMiComponent } from './sobre-mi.component';
import { ModalsSobreMiModule } from './modals-sobre-mi/modals-sobre-mi.module';
import { ModalTitulosModule } from '../1.modal-titulos/modal-titulos.module';




@NgModule({
  declarations: [
    SobreMiComponent
  ],
  exports: [SobreMiComponent],
  imports: [
    CommonModule,
    ModalsSobreMiModule,
    ModalTitulosModule
  ]
})
export class SobreMiModule { }
