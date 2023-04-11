import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProyectosComponent } from './proyectos.component';
import { LapizytachitoModule } from "../../modals/lapizytachito/lapizytachito.module";



@NgModule({
    declarations: [
        ProyectosComponent
    ],
    exports: [ProyectosComponent],
    imports: [
        CommonModule,
        LapizytachitoModule
    ]
})
export class ProyectosModule { }
