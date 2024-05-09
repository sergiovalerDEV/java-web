// movieRepository.js

export class MovieRepository {
    static async getMovies() {
        try {
            const response = await fetch('http://localhost:8080/API_JAVA_MYSQL/Controller?ACTION=PELICULA.FILTER&FILTRO=DRAMA');
            if (!response.ok) {
                throw new Error('Error al obtener las películas');
            }
            return await response.json();
        } catch (error) {
            console.error(error);
            return [];
        }
    }
}
