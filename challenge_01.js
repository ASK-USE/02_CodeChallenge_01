
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// let firstNumber, secondNumber, summe;

// firstNumber = prompt("Bitte erste Zahl eingeben:");
// secondNumber = prompt("Bitte zweite Zahl eingeben:"); 
// summe = parseInt(firstNumber) + parseInt(secondNumber);

// console.log(firstNumber + " + " + secondNumber + " = " + summe);

// let zahl1, zahl2, summe;

// zahl1 = prompt ("Bitte Zahl 1 eingeben: ");
// zahl2 = prompt ("Bitte Zahl 2 eingeben: ");

// console.log("Datentyp: " + typeof zahl1);
// console.log("Datentyp: " + typeof zahl2);

// summe = zahl1 + zahl2;

// console.log("Die summe der Zahlen ist:" + summe);

//************************************************/
//**Variante 1, Gute Lesbarkeit, viele Variablen**/
//************************************************/


// let ziffer1, ziffer2, zahl1, zahl2, summe;

// ziffer1 = prompt ("Bitte Zahl 1 eingeben: ");
// ziffer2 = prompt ("Bitte Zahl 2 eingeben: ");

// console.log("Datentyp: " + typeof ziffer1);
// console.log("Datentyp: " + typeof ziffer2);

// // Typkonvertierung: ziffer --> zahl
// // zahl1 = parseFloat(ziffer1);
// // zahl2 = parseFloat(ziffer2);

// zahl1 = parseInt(ziffer1);
// zahl2 = parseInt(ziffer2);

// console.log("Datentyp: " + typeof zahl1);
// console.log("Datentyp: " + typeof zahl2);

// summe = zahl1 + zahl2;

// console.log("Die summe der Zahlen ist:" + summe);

//************************************************/
//**Variante 2, schwerer Lesbar, wenig Variablen**/
//************************************************/
//**Das umändern von funktionierendem Code in*****/
//***effizienteren nennt sich refactoring*********/
//************************************************/

// let zahl1, zahl2, summe;

// zahl1 = parseInt(prompt("Zahl 1: "));
// zahl2 = parseInt(prompt("Zahl 2: "));

// summe = zahl1 + zahl2;

// console.log("Die summe der Zahlen ist: " + summe);

//************************************************/
//**Variante 3,eine Zeile, schlecht Lesbar********/
//************************************************/

console.log
(
    "Die Summe ist: " +
   (
    parseFloat(prompt("Bitte Zahl 1 eingeben")) +
    parseFloat(prompt("Bitte Zahl 2 eingeben"))
   )
);