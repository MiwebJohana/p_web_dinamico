import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LapizytachitoComponent } from './lapizytachito.component';



@NgModule({
  declarations: [
    LapizytachitoComponent
  ],
  exports:  [LapizytachitoComponent],
  imports: [
    CommonModule
  ]
})
export class LapizytachitoModule { }
