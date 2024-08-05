


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

let numeros=[];
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
        alert ("Por favor, ingresa un numero válido de segudos.");
        return; //salir de la funcion si el numero no es válido
     }
     setTimeout(function() {
        alert(mensaje);
    }, segundos * 1000);
}
confiAlarm ();





//**Palindromo */////////////////////////////
function esPalindromo (texto){
const cleanText = texto.replace (/[^a-zA-Z0-9]/g, '') //**// Eliminar espacios y puntuación, y convertir a minúsculas */ 
return cleanText === cleanText.split('').reverse().join('');
//**// Comprobar si el texto limpio es igual a su reverso */
} 


const entrada = prompt("Introduce una palabra o oración:");//**// Solicitar al usuario una palabra u oración */


if (esPalindromo(entrada)) {//**// Verificar si es un palíndromo */
    console.log(`"${entrada}" es un palíndromo.`);
} else {
    console.log(`"${entrada}" no es un palíndromo.`);
}


const ejemplos = [ ];
ejemplos.forEach(ejemplo => {
    if (esPalindromo(ejemplo)) {
        console.log(`"${ejemplo}" es un palíndromo.`);
    } else {
        console.log(`"${ejemplo}" no es un palíndromo.`);
    }
});




//** Factoril*///////////////////////
// Función recursiva para calcular el factorial
function factorial(n) {
    // El factorial de 1 es 1
    if (n === 1) {
        return 1;
    }
   
    return n * factorial(n - 1);//** // Caso recursivo: n! = n * (n-1)! */
}


const ingreso = parseInt(prompt("Introduce un número entero (1 o mayor):"), 10);


if (isNaN(ingreso) || ingreso < 1) {//**// Validar que la entrada sea un número entero válido y mayor o igual a 1 */
    console.log("Por favor, introduce un número entero válido mayor o igual a 1.");
} else {
   
    const resultado = factorial(ingreso);//** // Calcular y mostrar el factorial */
    console.log(`El factorial de ${ingreso} es: ${resultado}`);
}





//**Matriz plana */////////////////////////////////////////

function aplanarMatriz(matriz) {
    const resultado = [];//**// Iniciar un array vacío para almacenar los elementos aplanados */

    // Función recursiva para recorrer y aplanar
    function aplanar(elemento) {
        if (Array.isArray(elemento)) {
            // Si el elemento es una matriz, iterar sobre sus elementos
            for (const elem of elemento) {
                aplanar(elem); //** Llamar recursivamente*/ 
            }
        } else {
            resultado.push(elemento);//**// Si no es una matriz, agregar el elemento al resultado */
        }
    }

    aplanar(matriz);
    return resultado; // Retornar la matriz aplanada
}

let multiDimensión = [1, [2, 3, [4, 5, [6]]]];

const matrizAplanada = aplanarMatriz(multiDimensión);//** Aplanar la matriz y mostrar el resultado */
console.log(matrizAplanada);


