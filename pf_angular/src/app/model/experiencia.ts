export class Experiencia {

     idExp?: number;
     empresaExp: String;
     inicioExp:String;
     finExp: String;
     tareasExp: String;


     constructor(empresaExp: String, inicioExp: String, finExp: String, tareasExp: String) {
            this.empresaExp = empresaExp;
            this.inicioExp = inicioExp;
            this.finExp = finExp;
            this.tareasExp = tareasExp;
     }
}
