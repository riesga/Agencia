
import { Testimoniales } from "../models/testimoniales.js";

const guardarTestimonial = async (req, res) =>{

  const { nombre, correo, mensaje } = req.body;

  const errores = [];

  if(nombre.trim() === "") {
    errores.push({mensaje: 'El nombre está vacío'})
  }

  if(correo.trim() === "") {
    errores.push({mensaje: 'El correo está vacío'})
  }

  if(mensaje.trim() === "") {
    errores.push({mensaje: 'El mensaje está vacío'})
  }
  
  if(errores.length > 0) {
    res.render('testimoniales', {
      pagina: 'Testimonios',
      errores,
      nombre,
      correo,
      mensaje      
    })
  } else {
    try {
      await Testimoniales.create({
        nombre,
        correo,
        mensaje,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      const testimoniales = await Testimoniales.findAll();
      res.render('testimoniales', {
        pagina: 'Testimonios',
        errores,
        testimoniales
      })
    } catch (error) {
      console.log(error);
    }
  }
}

export {
  guardarTestimonial
}