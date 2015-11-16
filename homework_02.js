/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

function ex_1_F(myArray){
    var tot = 0;
    myArray.every(x => {
      if(x > 0){
          tot += x;
      }
      return x > 0;   
    });
    return tot;
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

function ex_2_F(n){
    var tot = 0;
    var myArray = [];
        for(var i = 1; i <= n; i++){
            myArray[i] = (2 * i) - 1;
            console.log(myArray[i]);
        }
    myArray.every(x => tot += x);
    return tot;
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function ex_3_F(myArray){
    var tot = 0;
    var ris = 0;
    myArray.every(x => tot += x);
    ris = tot / myArray.length;
    return ris;
}

/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, 
restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. 
Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]
Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/

function ex_4_F(a, b){
    var tot = 0;
    var arrAB = [];
    var arrBA = [];
    if(b > a){
        for(var i = a; i <= b; i++){
            arrBA[i] = i;
        }
        arrBA.every(x => tot += x);
        return tot
     } else {
         for(var j = b; j <= a; j++){
             arrAB[i] = j;
         }
         arrAB.every(x => tot += x);
     }
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
Esempio:
mult(2, 3) => 6
*/

function ex_5_F(a, b){
    var tot = 0;
    var myArray = [];
    if(a < 0 || b < 0){
        return false;
    } else {
        for(var i = 0; i < b; i++){
            myArray[i] = a;
        }
        myArray.every(x => tot += x);
        return tot;
    }
}

/*
Esercizio 6

Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite l’utilizzo dei soli operatori somma e sottrazione.
*/

/*
Esercizio 7

Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
Esempio:
pow(2, 3) => 8
*/

function ex_7_F(x, y){
    var ris = 1;
    var myArray = [];
        if(x < 0 || y < 0){
            return console.log('dasafa');
        } else {
            for(var i = 0; i < y; i++){
                myArray[i] = x;
            }
           
           return myArray.reduce((x, y) => ex_5_F(x, y), 1);
    }
}

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/


/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
Esempio:
Input: A = {2, 5, 8}
Output A= {8, 5, 2}
*/

function ex_9_F(myArray){
    var yarrAym = [];
    yarrAym = myArray.reverse();
    return yarrAym;
}

/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un array di n elementi
contenenti a.
Esempio:
replicate(3, 4) => A= {3, 3, 3, 3}
*/

/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
Esempio
Input: A = {2, 5, 1, 8}
Output: A = {5, 1, 2, 8}
*/

function ex_11_F(myArray) {
    var disp = [];
    var pari = [];
    disp = myArray.filter(x => x % 2 != 0);
    pari = myArray.filter(x => x % 2 == 0); 
    return disp.concat(pari);
}