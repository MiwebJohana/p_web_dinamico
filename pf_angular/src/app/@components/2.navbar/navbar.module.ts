import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { LoginModule } from './login/login.module';
import { ModalsNavbarModule } from './modals-navbar/modals-navbar.module';




@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [NavbarComponent],
    imports: [
        CommonModule,
        LoginModule,
        ModalsNavbarModule,
    ]
})
export class NavbarModule { }
