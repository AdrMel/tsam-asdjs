/*
Esercizio 1
Dato un array di interi, 
restituire la loro somma fino a che non viene ritrovato un valore negativo
*/

// Complessità: O(n)

function ex_1_I(array){
  tot = 0;
    for(i = 0; i < array.length; i++){
        if(array[i] < 0){
            return tot;
        } else {
            tot += array[i];
            }
     }
  return tot;
}

// Complessità: O(n)

function ex_1_R(array){
  if(array.length == 0 || array[0] < 0){
    return 0;
   } else {
        return array[0] + ex_1_R(array.slice(1));
        }
 }

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

// Complessità: O(n)

function ex_2_I(n){
  tot = 0;
  cont = 1;
    for(i = 0; i < n; i++){
         tot += 1 + 2 * i;
        }
  return tot;
}

// Complessità: O(n)

function ex_2_R(n) {
    if (n == 0) {
        return 0;
    } else {
        return 2 * n - 1 + ex_2_R(n - 1);
    }
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

// Complessità: O(n)

function ex_3_I(array){
  tot = 0;
    for(i = 0; i < array.length; i++){
        tot += array[i];
     }
  return tot / array.length;
}

function ex_3_R(myarray) {
    return avgAllRW(myarray) / myarray.length;
}

// Complessità: O(n)

function avgAllRW(myarray) {
    if (myarray.length == 0) {
        return 0;
    } else {
        return myarray[0] + avgAllRW(myarray.slice(1));
    }
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

// Complessità: O(n)

function sumInterv(a, b){
  tot = 0;
    if(a >= b){
            for(i = b; i <= a; i++){
                tot += i;
            }
     } else {
        for(j = a; j <= b; j++){
                tot += j;
        }
    }
  return tot;
}

function sumIntervalRW(a, b) {
    if (a == b) {
        return a;
    } else {
        return a + sumIntervalRW(a + 1, b);
    }
}

// Complessità: O(n)

function sumIntervalR(a, b) {
    if (a < b){
        return sumIntervalRW(a, b);
    } else {
        return sumIntervalRW(b, a);
    }
}

// Per Tiziano

function ex_4_I(x, y) {
    return sumInterv(x, y);
}

function ex_4_R(x, y) {
    return sumIntervalR(x, y);
}

/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.
Esempio:
mult(2, 3) => 6
*/

// Complessità: O(n)

function mult(a, b){
  tot = 0;
        for(i = 0; i < b; i++){
            tot += a;
            }  
  return tot;
}

function multR(a, b){
    return multRC(a, b, 0, 0);
}

// Complessità: O(n)

function multRC(a, b, acc, tot){
    if(acc == b){
        return tot;
    } else {
        tot += a;
        acc++;
        return multRC(a, b, acc, tot);
    }
}

// Per Tiziano
function ex_5_I(a, b){
	return mult(a, b);
}

function ex_5_R(a, b){
	return multR(a, b);
}

/*
Esercizio 6

Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite l’utilizzo dei soli operatori somma e sottrazione.
*/

// Complessità: O(n)

function div(a, b){
  var quoz = 0;
    while(a - b >= 0){
      var c = a - b;
      a = c;
      quoz++;
    }
    var r = a;
    var a = [quoz, r];
    return a;
}    

// Complessità: O(n)

function divR(a, b){
	return divRC(a, b, 0);
}

function divRC(a, b, acc){
  if(a < b){
    risp = [acc, a];
	return risp;
   } else {
	return divRC((a - b), b, (acc + 1));
      }
}

function ex_6_I(a, b){
  return div(a, b);
}

function ex_6_R(a, b){
  return divR(a, b);
}

/*
Esercizio 7

Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.
Esempio:
pow(2, 3) => 8
*/

// Complessità: O(n)

function pow(x, y){
  tot = 1;
    for(var i = 0; i < y; i++){
       tot = mult(tot, x);
    }
  return tot;
}

// Complessità: O(n)

function powR(x, y){
  if(y == 0){
    return 1;
  } else {
    return  mult( x, powR(x, (y - 1)));
  }
}

// Per Tiziano
function ex_7_I(x, y){
  return pow(x, y);
}

function ex_7_R(x, y){
  return powR(x, y);
}

/*
Esercizio 8
Dato un array contenente n^2 elementi, scrivere un algoritmo che permetta di inserire tutti gli
oggetti in un array bidimensionale n x n.
*/

// Complessità: O(n^2)

function creaMatrice(myArray){
  var n = Math.sqrt(myArray.length);
  var matrice = [[]];
  var cont = 0;
    for(var i = 0; i < n; i++){
      matrice[i] = [];
        for(var j = 0; j < n; j++){
          matrice[i][j] = myArray[cont];
          cont++;
        }
    } 
   return matrice;
}

// Complessità: O(n)

function ex_8_R(aa){
	var n = Math.sqrt(aa.length); 
    var ab = new Array(n);
    for(var i = 0; i < n; i++){
        ab[i] = new Array(n);
    }
    return swapMx(aa, ab, n, 0);
}
function swapMx(aa, aRes, n, i){
    if(i == aa.length)
        return aRes;
    aRes[Math.floor(i / n)][i % n] = aa[i];
    return swapMx(aa, aRes, n, ++i);
}

// Per Tiziano
function ex_8_I(myArray){
  return creaMatrice(myArray);
}


/*
Esercizio 9
Dato una lista di elementi, scrivere un algoritmo che permetta di invertire l’ordine degli
elementi.
Esempio:
Input: A = {2, 5, 8}
Output A= {8, 5, 2}
*/

// Complessità: O(n)

function invert(myArray){
    yarra = [];
    c = 0;
        for(i = myArray.length - 1; i >= 0; i--){
            yarra[c] = myArray[i];
            c++;
        }
    return yarra;
}

// Complessità: O(n)



//Per Tiziano

function ex_9_I(myArray){
  return invert(myArray);
}

function ex_9_R(myArray){
  return invertR(myArray);
}
function invertR(myArray){
    
    if(myArray.length == 1){
    return myArray;
    } else {
      return new Array(0).concat(myArray.pop(),invertR(myArray));
    }
}
/*
Esercizio 10
Dati due interi a, n maggiori di 0, scrivere un algoritmo che crea un array di n elementi
contenenti a.
Esempio:
replicate(3, 4) => A= {3, 3, 3, 3}
*/

// Complessità: O(n)

function creaArr(a, n){
  myArray = [];
    if(a > 0 && n > 0){
        for(i = 0; i < n; i++){
            myArray[i] = a;
         }
    }
    return myArray;
}

// Complessità: O(n)

function creaArrR(a, n){
    myArray = [];
    if(n == 0){
      return myArray;
       return myArray[a];
     } else {
       return a, creaArr(a, n);
  }
}

// Per Tiziano
function ex_10_I(a, n){
  return creaArr(a, n);
}

function ex_10_R(a, n){
  return creaArrR(a, n);
}

/*
Esercizio 11
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi
dispari precedano nello stesso ordine tutti gli elementi pari.
Esempio
Input: A = {2, 5, 1, 8}
Output: A = {5, 1, 2, 8}
*/

// Complessità: O(n)

function firstOdds(array){
    odd = [];
    even = [];
    disp = 0;
    pari = 0;
        for(i = 0; i < array.length; i++){
            if(array[i] % 2 == 0){
                even[pari] = array[i];
                pari++;
            } else {
                odd[disp] = array[i];
                disp++;
                }
         }
    return odd.concat(even);
}

// Complessità O(n);

function ex_11_R(a){
    var nOdds = 0;
    for(var i=0;i<a.length;i++){
        if(a[i]%2!=0)
            nOdds++;
    }
    return orderOdds(a,nOdds,new Array(a.length),0);
}
function orderOdds(a,freePosForEven,b,i){
    if(a.length==0)
        return b;
    if(a[0]%2!=0){
        b[i]=a.shift();
        return orderOdds(a,freePosForEven,b,++i);    
    }  
    else{
        b[freePosForEven]=a.shift();
        return orderOdds(a,freePosForEven+1,b,i);
    }
}

// complessità O(n);
// Per Tiziano

function ex_11_I(myArray){
  return firstOdds(myArray);
}
