export class Formacion {

    idForm?: number;
    empresaForm: String;
    inicioForm: Date;
    finForm: Date;
    tareasForm: String;

    constructor(empresaForm: String, inicioForm: Date, finForm: Date, tareasForm: String) {

        this.empresaForm = empresaForm;
        this.inicioForm = inicioForm;
        this.finForm = finForm;
        this.tareasForm = tareasForm;
    }
}
