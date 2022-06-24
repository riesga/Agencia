import { Viaje } from "../models/Viaje.js";

const paginaInicio = (req, res) => {
  res.render('inicio', {
    pagina: 'Inicio'
  });
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

const paginaTestimoniales = (req, res) => {
  res.render('testimoniales', {
    pagina: 'Testimoniales'
  })
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