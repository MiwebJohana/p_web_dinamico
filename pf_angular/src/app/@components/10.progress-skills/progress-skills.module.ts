import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressSkillsComponent } from './progress-skills.component';
import { ModalsProgressModule } from './modals-progress/modals-progress.module';
import { ModalTitulosModule } from '../1.modal-titulos/modal-titulos.module';




@NgModule({
  declarations: [
    ProgressSkillsComponent
  ],
  exports: [ProgressSkillsComponent],
  imports: [
    CommonModule,
    ModalsProgressModule,
    ModalTitulosModule,
  ]
 
})
export class ProgressSkillsModule { }
