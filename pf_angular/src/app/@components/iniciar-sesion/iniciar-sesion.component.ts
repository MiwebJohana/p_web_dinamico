import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})

export class IniciarSesionComponent implements OnInit{
  form:FormGroup;
  constructor(private formBuilder: FormBuilder){
    this.form=this.formBuilder.group(
      {
        email:['',[Validators.required,Validators.email]],
        password:['',[Validators.required,Validators.minLength(8)]]
    }

    )
  }
   ngOnInit(): void {
     
   }

get Email() 
{
  return this.form.get('email');
}

get Password() 
{
  return this.form.get('password');
}
get EmailInvalid(){
  return this.Password?.touched && !this.Password.valid;
}
get PasswordInvalid(){
  return this.Email?.touched && !this.Email.valid;
}

onEnviar(event: Event){
  event.preventDefault;

  if (this.form.valid){
    alert("Todo salio bien ¡Enviar formulario!")
  }else{
    this.form.markAllAsTouched();
  }


}
}
