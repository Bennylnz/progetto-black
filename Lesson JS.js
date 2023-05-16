// console.log('Ciao');

/**
 *  Tre modi per DICHIARARE una VARIABILE:
 *      var 
 *      let
 *      const
 */

// DICHIARARE/CREARE una VARIABILE
let firstname;

// ASSEGNARE un VALORE ad una variabile
firstname = 'Nicola';

console.log(firstname);

// DICHIARAZIONE ed INIZIALIZZAZIONE di una variabile
let age = 39;

// Riassegnare/sovrascrivere un Valore di una variabile
age = 18;

console.log(age);

// CONVENZIONI per DICHIARARE una Variabile
/* 
    Regole per come si possono dichiarare le variabili:
    let test;
    let $test;
    let _test;
    let test_test
    let testTest;
    let test1;

*/

/**
 *  NON si possono dichiare le variabili in questo modo:
 *  let 1test;
 *  let test test;
 *  let #test;
 *  let test%;
 *  let test 1;
 */


// CONST
const PGRECO = 3.14;

console.log(PGRECO);

// DATA TYPES:
/**
 *  PRIMITIVI: conservano UN SOLO VALORE e sono IMMUTABILI
 *   - string
 *   - number
 *   - boolean
 *   - undefined
 *   - null
 * 
 *  NON Primitivi/STRUTTURALI
 *      - Oggetto
 * 
 */

// NUMBER
let agePerson = 20;

// OPERATORI MATEMATICI
console.log('SOMMA: ', 5 + 10);
console.log('SOTTRAZIONE: ', 10 - 5);
console.log('MOLTIPLICAZIONE: ', 5 * 10);
console.log('DIVISIONE: ', 10 / 2);
console.log('ELEVARE alla POTENZA: ', 5 ** 5);
console.log('RESTO di una divisione', 10 % 2);

// STRING
let response = prompt('Ti puoi presentare?');
let agePerson1 = prompt('Quanti anni hai?');


// CONCATENAZIONE tra STRINGHE
console.log(response + ' ' + 'e ho 39 anni');

// BACKTICK ``
// String Interpolation
console.log(`${response} e ho ${agePerson1} anni`);

// Linguaggio a TIPIZZAZIONE DEBOLE = TYPE COERCION
// IMPLICITO: 
let mynumber = 5;

console.log('ciao' + mynumber);


// Operatore UNARIO
console.log(typeof agePerson1);

// ESPLICITO
let agePersonNumber = Number(agePerson1);

console.log(typeof agePersonNumber);


// Boolean: true, false
console.log(true);

/**
 *  OPERATORI:
 *      MATEMATICI
 *      CONFRONTO: ==, ===, >, <, >=, <=, !=
 *      LOGICI: && (and), || (or)
 * 
 */

console.log('Sono uguali? ', 10 == '10');
// console.log('Sono uguali? ', 10 == 9);
console.log('Sono uguali? ', 10 === '10');


let num1 = 5;
let num2 = 1;

console.log(`5 e' maggiore di 1? ${num1 > num2}`);

console.log("E' diverso? ", 20 != 10);

console.log(1 < 2 < 3); // 1 < 2 = 1 < 3 = true

console.log(3 > 2 > 1); // 3 > 2 = 1 > 1 = false


// NULL: questa variabile NON esiste

// UNDEFINED: la variabile e' stata dichiarata, ma non e' stato assegnato alcun valore
let message;

console.log(message);

// Operatori LOGICI:
// Contesto Booleano:
//  THRUTY: sono tutti i numeri diversi da 0 e da NaN, tutte le strighe NON sono vuote, true, tutti gli oggetti
//  FALSY: 0, NaN, le stringhe Vuote, false, null, undefined

// NaN: Not A Number, valore ASSORBENTE
console.log(5 * 'ciao');
console.log(5 * '5');

// Stringa Vuota
let emptyString = '';


// &&: and
//  mi restituisce il primo dato falsy che trova, altrimenti mi restituisce l'ultimo truthy
console.log( 10 && true ); 
console.log( 10 && 300 ); 

// ||: or
// mi restitusce il dato truthy che trova, altrimenti mi restituisce l'ultimo falsy
console.log( 10 || true );
console.log( NaN || 20 );


console.log( 100 > 99 && 99 > 98 );
console.log( 1 > 10 && 99 > 98 );


console.log( 1 > 10 || 99 > 98 );

// Math
let PIGRECO = Math.PI;

console.log(PIGRECO);

let incasso1 = 100;
let incasso2 = 10;
let incasso3 = -2000;

let max = Math.max(incasso1, incasso2, incasso3);
let min = Math.min(incasso1, incasso2, incasso3);

console.log( `L'incasso maggiore di oggi e' stato: ${max} euro, mentre l'incasso minore e' stato di ${min}` );

