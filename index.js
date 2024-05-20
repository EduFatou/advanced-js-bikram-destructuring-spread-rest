//RESUELVE LOS EJERCICIOS AQUÍ

const empleados = [
    { 
        name: "Luis", 
        email: "Luis@gmail.com" 
    },
    { 
        name: "Ana", 
        email: "Ana@gmail.com"
    },
    { 
        name: "Andrea", 
        email: "Andrea@gmail.com" 
    },
];
//los dos primeros ejercicios no es lo que se pide, pero no me salía y tenía que empezar por algo
const ana = empleados[1];
console.log(ana);

const emailLuis = empleados[0].email;
console.log(emailLuis);


 // Inicialmente
let a = 5;
let b = 3;

[a, b] = [b, a];



const HIGH_TEMPERATURES = {
    yesterday: 30,
    today: 35,
    tomorrow: 32,
  };

const {yesterday, today: maximaHoy, tomorrow: maximaManana} = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);




function sumEveryOther(...numeros){
    let total = 0;
    for (let i = 0; i < numeros.length; i++){
        total += numeros[i];
    }
    return total;
};




function addOnlyNums(...mix) {
    return mix.reduce((total, curr) => {
        if (typeof curr === "number") {
            return total + curr;
        }
        return total;
    }, 0);
}


function countTheArgs(...args){
    return args.length;
}

function combineTwoArrays(arr1, arr2){
    return [...arr1, ...arr2];
}

function onlyUniques(...args){
    let arrayLimpio = [];
    for ( i = 0; i < args.length; i++){
        if ( !arrayLimpio.includes(args[i]) ){
            arrayLimpio.push(args[i]);
        }
    }
    return arrayLimpio;
}

function combineAllArrays(...arrays) {
    return arrays.flat();
  }


function sumAndSquare(...args){
    total = 0;
    for (i = 0; i < args.length; i++){
        total += (args[i]**2);
    }
    return total;
}