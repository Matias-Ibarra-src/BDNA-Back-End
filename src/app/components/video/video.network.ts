import express, { Router, Request, Response} from 'express';
import { Video } from '../../models/video.model';

import responseModule from '../../modules/response.module';
import videoController from './video.controller';


const router: Router = express.Router();

router.get("/all", async function(req: Request, res: Response){
    try {
        const Videos: Video[] = await videoController.getAllVideos();
        responseModule.success(req, res, Videos);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }
});

router.post("/add/:id", async function(req: Request, res: Response){

    const id: String = req.params['id'];
    const video:Video=req.body;

    try {
        const Result: Video | null = await videoController.addVideo(video , id);
        responseModule.success(req, res, Result,201);
    } catch (error) {
        responseModule.error(req,res,"Error desconocido");
    }

});

export default router;