import Express from "express";
import router from './routes/index.js';
import db from './config/db.js';
import dotenv from 'dotenv';

dotenv.config();


const app = Express();

//Conectar la base de datos
try {
  await db.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//Definir puerto
const port = process.env.PORT || 4000;

//Habilitar pug
app.set('view engine', 'pug');

//Obtener año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.ActualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de viajes";
  next();
});

//Agregar body parser para leer los datos de formularios
app.use(Express.urlencoded({extended: true}));

//Definir la carpeta pública
app.use(Express.static('public'));

//Agregar router
app.use('/', router);


app.listen(port, () => {
  console.log(`El servidor está funcionando en el puerto ${port}`);
})