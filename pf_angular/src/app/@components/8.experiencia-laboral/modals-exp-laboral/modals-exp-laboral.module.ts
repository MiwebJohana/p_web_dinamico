import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsExpLaboralComponent } from './modals-exp-laboral.component';



@NgModule({
  declarations: [
    ModalsExpLaboralComponent
  ],
  exports:[ModalsExpLaboralComponent],
  imports: [
    CommonModule
  ]
})
export class ModalsExpLaboralModule { }
