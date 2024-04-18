class PeliculaService {
    constructor(peliculaDAO) {
      this.peliculaDAO = peliculaDAO;
    }
  
    async obtenerTodasLasPeliculas() {
      try {
        return await this.peliculaDAO.obtenerTodasLasPeliculas();
      } catch (error) {
        throw new Error('Error al obtener las películas: ' + error.message);
      }
    }
    
  
    // Implementa métodos adicionales para manejar las solicitudes relacionadas con las películas
  }
  
  module.exports = PeliculaService;
  