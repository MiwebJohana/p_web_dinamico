import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { ModalsCursosModule } from './modals-cursos/modals-cursos.module';



@NgModule({
  declarations: [
    CursosComponent
  ],
  exports: [CursosComponent],
  imports: [
    CommonModule,
    ModalsCursosModule
  ]
 
})
export class CursosModule { }
