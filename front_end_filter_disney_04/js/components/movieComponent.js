// movieComponent.js

export class MovieComponent {
    constructor(movieData) {
        this.movieData = movieData;
    }

    render() {
        const movieContainer = document.createElement('div');
        movieContainer.classList.add('movie-container');

        // Crear imagen de la película
        const imageElement = document.createElement('img');
        imageElement.classList.add('movie-image');
        imageElement.src = this.movieData.imagen;
        imageElement.alt = this.movieData.titulo;
        movieContainer.appendChild(imageElement);

        // Crear título de la película
        const titleElement = document.createElement('h2');
        titleElement.classList.add('movie-title');
        titleElement.textContent = this.movieData.titulo;
        movieContainer.appendChild(titleElement);

        // Crear descripción de la película
        const descriptionElement = document.createElement('p');
        descriptionElement.classList.add('movie-description');
        descriptionElement.textContent = this.movieData.descripcion;
        movieContainer.appendChild(descriptionElement);

        // Crear año de la película
        const yearElement = document.createElement('p');
        yearElement.classList.add('movie-year');
        yearElement.textContent = `Año: ${this.movieData.ano}`;
        movieContainer.appendChild(yearElement);

        return movieContainer;
    }
}
