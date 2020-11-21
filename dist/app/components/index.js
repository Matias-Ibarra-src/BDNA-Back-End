"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const noticia_1 = __importDefault(require("./noticia"));
const video_1 = __importDefault(require("./video"));
const components = [
    noticia_1.default,
    video_1.default
];
exports.default = components;
