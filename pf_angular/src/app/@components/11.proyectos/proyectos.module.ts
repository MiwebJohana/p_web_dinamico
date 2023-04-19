import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { ModalsProyectosComponent } from './modals-proyectos/modals-proyectos.component';



@NgModule({
    declarations: [
        ProyectosComponent,
        ModalsProyectosComponent
    ],
    exports: [ProyectosComponent],
    imports: [
        CommonModule,
    ]
})
export class ProyectosModule { }
