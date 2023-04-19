import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsProgressComponent } from './modals-progress.component';



@NgModule({
  declarations: [
    ModalsProgressComponent
  ],
  exports: [ModalsProgressComponent ],
  imports: [
    CommonModule
  ]
})
export class ModalsProgressModule { }
