
//**Perfil del usuario */
const username = prompt("¿Cuál es tu nombre de usuario?");
const age = prompt("¿Cuántos años tienes?");
const moviesInput = prompt("Ingresa tus películas favoritas, separadas por comas");
const movies = moviesInput.split(',').map(movie => movie.trim());


function displayUserInfo(name, age, movieList) {//**// Función para mostrar los datos en la consola */
    console.log(`Nombre de usuario: ${name}`);
    console.log(`Edad: ${age} años`);

    movieList.forEach(movie => {
        console.log(`La película "${movie}" es una de mis favoritas.`);
    });
}

displayUserInfo(username, age, movies);//**// Llamar a la función con los datos del usuario */


//**Número mas alto */

let numbers=[];
 for (let i= 0; i< 10; i++) {
    let num = parseFloat(prompt(`Introduce el número ${i + 1} de 10:`));
    
 }