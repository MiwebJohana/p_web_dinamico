import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { LapizytachitoModule } from "../../modals/lapizytachito/lapizytachito.module";



@NgModule({
    declarations: [
        FooterComponent
    ],
    exports: [FooterComponent],
    imports: [
        CommonModule,
        LapizytachitoModule
    ]
})
export class FooterModule { }
