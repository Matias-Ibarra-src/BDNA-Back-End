"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const definition = {
    titulo: { type: String, required: true },
    imgUrl: { type: String, required: true },
    resumen: { type: String, required: true },
    cuerpo: { type: String, required: true },
    categoria: { type: String, required: true },
    fecha: { type: Date }
};
const schema = new mongoose_1.Schema(definition);
exports.default = mongoose_1.model('Noticia', schema, 'Noticias');
