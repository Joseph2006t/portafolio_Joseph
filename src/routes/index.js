import { Router } from "express";

const router = Router();

router.get('/', (req, res) => res.render('index',{title:'Portafolio Joseph'}));

export default router; // exporta el router para ser utilizado en otros archivos