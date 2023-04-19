import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsFooterComponent } from './modals-footer.component';



@NgModule({
  declarations: [
    ModalsFooterComponent
  ],
  exports: [ModalsFooterComponent],
  imports: [
    CommonModule
  ]
})
export class ModalsFooterModule { }
