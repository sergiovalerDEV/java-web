const express = require('express');
const router = express.Router();

const PeliculaService = require('../services/PeliculaService');
const MySQLMotor = require('../model/MySQLMotor'); // Ejemplo de implementación específica de MySQL
const PostgreSQLMotor = require('../model/PostgreSQLMotor'); // Ejemplo de implementación específica de MySQL
const PeliculaDAO = require('../model/PeliculaDAO');

// Configuración del motor SQL específico (MySQL)
// const mysqlConnection = {}; // Aquí deberías pasar la configuración de la conexión a MySQL

//const MySQLConfig = require('./config');
const PostgreConfig = require('../model/config/PostgreConfig');

const postgresConnection = PostgreConfig.getConfig();
// const mysqlConnection = MySQLConfig.getConfig();

//const mysqlMotor = new MySQLMotor(mysqlConnection);
const postgresMotor = new PostgreSQLMotor(postgresConnection);

// Creación del DAO y del servicio de películas
//const peliculaDAO = new PeliculaDAO(mysqlMotor);
const peliculaDAO = new PeliculaDAO(postgresMotor);
const peliculaService = new PeliculaService(peliculaDAO);


// Rutas de películas
router.get('/', async (req, res) => {
    try {
      const peliculas = await peliculaService.obtenerTodasLasPeliculas();
      res.json(peliculas);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


// Ruta para obtener todas las películas
/*router.get('/', (req, res) => {
  res.send('Obtener todas las películas');
});*/

// Ruta para obtener una película por ID
router.get('/:id', (req, res) => {
  const movieId = req.params.id;
  res.send(`Obtener la película con ID ${movieId}`);
});

// Ruta para agregar una nueva película
router.post('/', (req, res) => {
  // Aquí puedes procesar la solicitud para agregar una nueva película
  res.send('Agregar una nueva película');
});

// Ruta para actualizar una película existente
router.put('/:id', (req, res) => {
  const movieId = req.params.id;
  // Aquí puedes procesar la solicitud para actualizar la película con el ID proporcionado
  res.send(`Actualizar la película con ID ${movieId}`);
});

// Ruta para eliminar una película
router.delete('/:id', (req, res) => {
  const movieId = req.params.id;
  // Aquí puedes procesar la solicitud para eliminar la película con el ID proporcionado
  res.send(`Eliminar la película con ID ${movieId}`);
});

module.exports = router;
