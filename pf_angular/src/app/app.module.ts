import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './@components/2.navbar/navbar.module';
import { BannerModule } from './@components/3.banner/banner.module';
import { PresentacionModule } from './@components/4.presentacion/presentacion.module';
import { SobreMiModule } from './@components/5.sobre-mi/sobre-mi.module';
import { EducacionModule } from './@components/6.educacion/educacion.module';
import { CursosModule } from './@components/7.cursos/cursos.module';
import { ExperienciaLaboralModule } from './@components/8.experiencia-laboral/experiencia-laboral.module';
import { FormacionProfesionalModule } from './@components/9.formacion-profesional/formacion-profesional.module';
import { ProgressSkillsModule } from './@components/10.progress-skills/progress-skills.module';
import { ProyectosModule } from './@components/11.proyectos/proyectos.module';
import { FooterModule } from './@components/12.footer/footer.module';



@NgModule({
  declarations: [
    AppComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
