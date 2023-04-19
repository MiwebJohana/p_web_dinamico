import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { ModalsBannerModule } from './modals-banner/modals-banner.module';






@NgModule({
  declarations: [
    BannerComponent
  ],
  exports: [BannerComponent],
  imports: [
    CommonModule,
    ModalsBannerModule,
  ]
 
})
export class BannerModule { }
