export class Educacion {


    idEdu?: number;
    nombreEdu: String;
    tituloEdu: String;
    inicioEdu: Date;
    finEdu: Date;
    imgEdu: String;

    public Educacion() {
    }

    constructor(nombreEdu: String, tituloEdu: String, inicioEdu: Date, finEdu: Date, imgEdu: String) {

        this.nombreEdu = nombreEdu;
        this.tituloEdu = tituloEdu;
        this.inicioEdu = inicioEdu;
        this.finEdu = finEdu;
        this.imgEdu = imgEdu;
    }
}
