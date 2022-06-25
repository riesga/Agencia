import { Viaje } from "../models/Viaje.js";
import { Testimoniales } from "../models/testimoniales.js";

const paginaInicio = async (req, res) => {

  //Consultar 3 viajes y 3 testiominiales

  const promiseDB = [];

  promiseDB.push(Viaje.findAll({ limit: 3 }));
  promiseDB.push(Testimoniales.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all( promiseDB );
   
    res.render('inicio', {
      pagina: 'Inicio',
      clase: 'home',
      viajes: resultado[0],
      testimoniales: resultado[1]
    });
  } catch (error) {
    console.log(error);
  }
}

const paginaNosotros = (req, res) => {
  res.render('nosotros', {
    pagina: 'Nosotros'
  })
}

const paginaViajes = async (req, res) => {

  const viajes = await Viaje.findAll();  
  res.render('viajes', {
    pagina: 'Próximos viajes',
    viajes
  })
}

//Muestra un viaje por su slug
const paginaDetalleViaje = async (req, res) => {
  const { slug } = req.params;
  try {
    const resultado = await Viaje.findOne({
      where: {
        slug: slug
      }
    })
    res.render('viaje', {
      pagina: 'Detalle del viaje',
      resultado
    })
  } catch (error) {
    console.log(error);
  }
  
 
}

const paginaTestimoniales = async (req, res) => {

  try {
    const testimoniales = await Testimoniales.findAll();
    res.render('testimoniales', {
      pagina: 'Testimonios',
      testimoniales
    })
  } catch (error) {
    console.log(error);
  }
 
}

const paginaContacto = (req, res) => {
  res.render('contacto', {
    pagina: 'Contáctenos'
  })
}

export {
  paginaInicio,
  paginaNosotros,
  paginaViajes,
  paginaTestimoniales,
  paginaContacto,
  paginaDetalleViaje
}