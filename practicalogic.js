// Solicitar el nombre de usuario
const username = prompt("¿Cuál es tu nombre de usuario?");

// Solicitar la edad del usuario
const age = prompt("¿Cuántos años tienes?");

// Solicitar la lista de películas favoritas
// Nota: Se espera que el usuario ingrese las películas separadas por comas
const moviesInput = prompt("Ingresa tus películas favoritas, separadas por comas");

// Convertir el string de películas en un array
const movies = moviesInput.split(',').map(movie => movie.trim());

// Función para mostrar los datos en la consola
function displayUserInfo(name, age, movieList) {
    console.log(`Nombre de usuario: ${name}`);
    console.log(`Edad: ${age} años`);
    
    // Mostrar un mensaje para cada película favorita
    movieList.forEach(movie => {
        console.log(`La película "${movie}" es una de mis favoritas.`);
    });
}

// Llamar a la función con los datos del usuario
displayUserInfo(username, age, movies);
