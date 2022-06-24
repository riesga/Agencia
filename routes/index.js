import Express from "express";
import { paginaContacto, paginaInicio, paginaNosotros, paginaTestimoniales, paginaViajes, paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = Express.Router();


router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes', paginaViajes);

router.get('/testimoniales', paginaTestimoniales)

router.post('/testimoniales', guardarTestimonial)

router.get('/contacto', paginaContacto);

router.get('/viajes/:slug', paginaDetalleViaje);

export default router;