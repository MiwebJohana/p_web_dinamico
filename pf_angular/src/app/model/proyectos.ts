export class Proyectos {

    idProyecto?:number;
    tituloProyecto: String;
    descProyecto: String;

  

    constructor(tituloProyecto: String, descProyecto: String) {
       
        this.tituloProyecto = tituloProyecto;
        this.descProyecto = descProyecto;
    }
}
