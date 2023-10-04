// let age = 18;

// if (age >= 18) {
//   console.log("Eres mayor de edad");
// } else {
//   console.log("Eres menor de edad");
// }
// console.log(age >= 18);

// switch (true) {
//   case age >= 18:
//     console.log("Eres mayor de edad");
//     break;
//   default:
//     console.log("Eres menor de edad");

//     break;
// }

// if (person.age >= 18) {
//   console.log("Eres mayor de edad");
// } else if (person.sonOfBoss == true) {
//   console.log("No eres mayor de edad pero eres el hijo del jefe");
// } else {
//   console.log("Eres menor de edad");
// }
// let person = {
//   age: 17,
//   sonOfBoss: true,
// };

// switch (true) {
//   case person.age >= 18:
//     console.log("Eres mayor de edad");
//     break;
//   case person.sonOfBoss:
//     console.log("No eres mayor de edad pero eres el hijo del jefe");
//     break;
//   default:
//     console.log("Eres menor de edad");
//     break;
// }
// console.log(2 % 2);

// let a = 2;
// let b = '2';
// // b = b +1
// // b += 1;
// console.log(b)
// if( a === b){
//     console.log('a es igual b')
// }else{
//     console.log('a no es igual b')
// }
// let diaActual = new Date();
// const dia_de_la_semana = diaActual.getDay()
// switch (6) {
//   case 1:
//     console.log("Es Lunes");
//     break;
//   case 2:
//     console.log("Es Martes");
//     break;
//   case 3:
//     console.log("Es Miércoles");
//     break;
//   case 4:
//     console.log("Es Jueves");
//     break;
//   case 5:
//     console.log("Es viernes");
//     break;
//   case 6:
//   case 7:
//     console.log("Es fin de semana");
//     break;
//   default:
//     console.log("Ese día no existe");
// }

// const age = 18

const firstName = "Pepe";

// if (age <= 17 || firstName === "Iván") console.log('Eres menor de edad o te llamas '+ firstName)

// if (age <= 17 && firstName === "Iván") console.log('Eres menor de edad y te llamas '+ firstName)

// if (!firstName) console.log( firstName + ' no está definido')

// if(!age){
//     console.log("Entra en el if")
// }else{
//     console.log("no entra")
// }

// const age = 18
// const eresMayorDeEdad = age >= 18  ? "Eres mayor de edad" : "No eres mayor de edad";
// if(age >= 18){
//     console.log("Eres mayor de edad")
// }else{
//     console.log("No eres mayor de edad")
// }
// age >= 18  ? console.log("Eres mayor de edad" ): console.log("No eres mayor de edad");

// console.log(eresMayorDeEdad)

//**Práctica */

// Crea una variable llamada nota que sea un número que represente las calificación obtenida de un estudiante. Luego, desarrolla un condicional que muestre por consola un mensaje según la nota del estudiante de la siguiente manera:

// Si la nota de es mayor o igual a 9, muestra "Excelente desempeño académico".
// Si nota está entre 7 y 9, muestra "Buen desempeño académico".
// Si nota está entre 5 y 7, muestra "Normal desempeño académico".
// Si su nota está por debajo de 5, muestra "Necesita mejorar su desempeño académico".
// const nota = 12;

// switch (true) {
//   case nota > 10 || nota < 0:
//     console.error("Nota no válida");
//     break;
//   case nota >= 9:
//     console.log("Excelente desempeño académico");
//     break;
//   case nota >= 7:
//     console.log("Buen desempeño académico");
//     break;
//   case nota >= 5:
//     console.log("Normal desempeño académico");
//     break;
//   case nota >= 0:
//     console.log("Necesita mejorar su desempeño académico");
//     break;
//   default:
//     console.error("Hubo un problema");
//     break;
// }

const obj = {
  a: {
    b: true,
    c: [1, 3],
  },
  d: 5,
  f: "algo",
};

if (typeof obj === "object") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.a.b === "boolean") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.a.c[1] === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.d === "number") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (obj.d > 4 && obj.d < 8) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (typeof obj.f === "string") {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
if (obj.f.length === 4) {
  console.log("apruebas");
} else {
  console.log("suspendes");
}
