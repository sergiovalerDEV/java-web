import { MovieService } from './service/movieService.js';
import { MovieComponent } from './components/movieComponent.js';

const appContainer = document.getElementById('app');

async function cargarPeliculasDisney() {
    try {
        // Obtener películas del servicio
        const movies = await MovieService.listarPeliculas();
        
        // Limpiar contenedor
        appContainer.innerHTML = '';

        // Renderizar películas
        movies.forEach(movieData => {
            const movieComponent = new MovieComponent(movieData);
            const movieElement = movieComponent.render();
            appContainer.appendChild(movieElement);
        });
    } catch (error) {
        console.error('Error al cargar las películas:', error);
    }
}

window.addEventListener('load', cargarPeliculasDisney);
