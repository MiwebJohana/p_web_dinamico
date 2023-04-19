import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsBannerComponent } from './modals-banner.component';



@NgModule({
  declarations: [
    ModalsBannerComponent
  ],
  exports: [ ModalsBannerComponent ],
  imports: [
    CommonModule
  ]
})
export class ModalsBannerModule { }
