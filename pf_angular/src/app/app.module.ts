import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './@components/navbar/navbar.module';
import { BannerModule } from './@components/banner/banner.module';
import { PresentacionModule } from './@components/presentacion/presentacion.module';
import { SobreMiModule } from './@components/sobre-mi/sobre-mi.module';
import { EducacionModule } from './@components/educacion/educacion.module';
import { CursosModule } from './@components/cursos/cursos.module';
import { ExperienciaLaboralModule } from './@components/experiencia-laboral/experiencia-laboral.module';
import { FormacionProfesionalModule } from './@components/formacion-profesional/formacion-profesional.module';
import { ProgressSkillsModule } from './@components/progress-skills/progress-skills.module';
import { ProyectosModule } from './@components/proyectos/proyectos.module';
import { FooterModule } from './@components/footer/footer.module';
import { LoginModule } from './modals/login/login.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    BannerModule,
    PresentacionModule,
    SobreMiModule,
    EducacionModule,
    CursosModule,
    ExperienciaLaboralModule,
    FormacionProfesionalModule,
    ProgressSkillsModule,
    ProyectosModule,
    FooterModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
