class PeliculaDAO {
    constructor(sqlMotor) {
      this.sqlMotor = sqlMotor;
    }
    
    async obtenerTodasLasPeliculas() {
        try {
          // Consulta SQL para obtener todas las películas
          const query = 'SELECT * FROM PELICULAS';
          // Ejecutar la consulta utilizando el motor de base de datos específico
          const peliculas = await this.sqlMotor.ejecutarQuery(query);
          return peliculas;
        } catch (error) {
          throw new Error('Error al obtener todas las películas: ' + error.message);
        }
      }
    }

  module.exports = PeliculaDAO;
  