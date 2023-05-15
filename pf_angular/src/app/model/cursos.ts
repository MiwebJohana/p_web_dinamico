export class Cursos {
    idCursos?: number;
    tituloCursos: String;
    inicioCursos: Date;
    finCursos: Date;
    descripcionCursos: String;



    constructor (tituloCursos: String, inicioCursos: Date, finCursos: Date, descripcionCursos: String) {
        this.tituloCursos = tituloCursos;
        this.inicioCursos = inicioCursos;
        this.finCursos = finCursos;
        this.descripcionCursos = descripcionCursos;


    }
}
