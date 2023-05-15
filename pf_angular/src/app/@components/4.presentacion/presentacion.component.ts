import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit{
  Persona: persona = new persona("","","");
  persona: persona[] | undefined;
  isTrue: boolean = false;
  
  constructor(private personaService: PersonaService ){}


  ngOnInit(): void{
    this.personaService.list().subscribe(data =>{this.persona =data});
  }
  cargarPersona(): void{
    this.personaService.list().subscribe(data =>{this.persona =data});

  }
}