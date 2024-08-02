


//**Perfil del usuario *//////////////////////////////////

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




//**Número mas alto */////////////////////////////////////

let numbers=[];
 for (let i= 0; i< 10; i++) {
    let num = parseFloat(prompt(`Introduce el número ${i + 1} de 10:`));
    
 }
 function encontrarMayor(){
    let mayor = Infinity ; //**Empezamos con el menor valor posbile para aseguranos que cualquier numero sea mayor */
    for (let i=1; i <= 10; i++){ //**Use un bucle for para iterar 10 veces, pidiendo un número en cada iteración. */
        let numero = pedirNumero (i);
       
        if (numero > mayor) {
            mayor = numero;
        }
    }

    alert('El numero ingresado es: ${mayor.]');//**Mostramos el mensaje si el amyor es encontrado */
 }




 //** Alarma *////////////////////

function confiAlarm(){

    let segundos= parseInt (prompt("Ingresa la cantidad de segundos hasta que suene la alarma:"), 10);
     //** solicitar al ususario la cantidad de segundos */
     let mensaje= prompt("Ingresa un mensaje que quieras mostrar cuando suene la alarma:");
     //**Solicitar al usuario un mensaje  */

     if (isNaN (segundos) || segundos <= 0 ){
        alert ("Por favor, ingresa un n´mero válido de segudos.");
        return; //salir de la funcion si el numero no es válido
     }
     setTimeout(function() {
        alert(mensaje);
    }, segundos * 1000);
}
confiAlarm ();
