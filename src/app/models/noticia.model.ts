export interface Noticia{
    _id?: String;
    titulo: String;
    imgUrl: String;
    VideoUrl?: String;
    resumen: String;
    cuerpo: String;
    fecha: Date;
    categoria: String;
    autor?: String;
    estado?: String;
    visitas?: String;
}