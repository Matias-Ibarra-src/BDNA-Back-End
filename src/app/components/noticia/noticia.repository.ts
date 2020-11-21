import { Noticia } from '../../models/noticia.model';
import model from "./noticia.schema";

async function getAllNoticias(): Promise<Noticia[]>{
    return model.find();
}

async function getNoticiaById(id: String){
   return model.findOne({ _id : id});
}

function addNoticia( noticia: Noticia): Promise<Noticia>{
    return model.create<Noticia>(noticia);
}

function deleteNoticia(id : string){
    return model.deleteOne({_id : id}, function(err) {
        if (err) return console.error(err);
      });
}

/*
function updateNoticia(noticia: Noticia){
    return model.update({titulo = "asdkasd"});
}*/

export default {getAllNoticias , getNoticiaById, addNoticia, deleteNoticia};