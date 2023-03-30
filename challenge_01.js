
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let firstNumber, secondNumber, summe;

firstNumber = prompt("Bitte erste Zahl eingeben:");
secondNumber = prompt("Bitte zweite Zahl eingeben:"); 
summe = parseInt(firstNumber) + parseInt(secondNumber);

console.log(firstNumber + " + " + secondNumber + " = " + summe);
