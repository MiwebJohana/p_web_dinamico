import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  getPersona() {
    throw new Error('Method not implemented.');
  }
  URL = "http://localhost:8080/persona/";
  constructor(private httpClient: HttpClient) { }

   public list(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.URL+'lista');
  }

  public create(Persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.URL+'crear', persona);
  }

  public save(Persona: persona): Observable<any>{
    return this.httpClient.post<any>(this.URL+'crear', persona);
  }
 
 
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL+ `delete/${id}`) ;
  }
  public edit(Persona: persona): Observable<any>{
    return this.httpClient.put<any>(this.URL+ 'editar', persona) ;
  }

}
