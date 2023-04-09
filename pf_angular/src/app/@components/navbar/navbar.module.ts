import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LoginModule } from 'src/app/modals/login/login.module';



@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [NavbarComponent],
    imports: [
        CommonModule,
        LoginModule,
    ]
})
export class NavbarModule { }
