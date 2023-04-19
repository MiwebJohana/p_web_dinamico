import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { ModalsFooterModule } from './modals-footer/modals-footer.module';



@NgModule({
    declarations: [
        FooterComponent
    ],
    exports: [FooterComponent],
    imports: [
        CommonModule,
        ModalsFooterModule,
    ]
})
export class FooterModule { }
