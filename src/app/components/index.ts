import { Express } from "express";
import noticia from "./noticia";
import video from "./video";

const components: Express[] = [
    noticia,
    video
];

export default components;