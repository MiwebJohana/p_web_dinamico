import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { ModalsNavbarModule } from './modals-navbar/modals-navbar.module';
import { IniciarSesionModule } from '../iniciar-sesion/iniciar-sesion.module';




@NgModule({
    declarations: [
        NavbarComponent
    ],
    exports: [NavbarComponent],
    imports: [
        CommonModule,
        ModalsNavbarModule
    ],
})
export class NavbarModule { }
