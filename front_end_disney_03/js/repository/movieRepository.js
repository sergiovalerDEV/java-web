export class MovieRepository {
    static async getMovies() {
        try {
            const response = await fetch('http://localhost:3000/movies');
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
