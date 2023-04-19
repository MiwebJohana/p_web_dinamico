import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalsNavbarComponent } from './modals-navbar.component';



@NgModule({
  declarations: [
    ModalsNavbarComponent
  ],
  exports: [ModalsNavbarComponent ],
  imports: [
    CommonModule,
  ]
})
export class ModalsNavbarModule { }
