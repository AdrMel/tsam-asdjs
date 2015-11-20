// Es 1

Array.prototype.sumWhileNeg = function(){ 
    var tot = 0;
    this.every(x => {
        if(x > 0){
            tot += x;
        }
        return x > 0;
        }
    )
    return tot;
}

// Per Tiziano
function ex_1_P(myArray){
    return myArray.sumWhileNeg();
}

// Es 3

Array.prototype.media = function() {
        if(this.length == 0){
        return 0;
    }else{
       return this.reduce((acc, x) => acc + x, 0) / this.length;
    }
}

//Per Tiziano

function ex_3_P(myArray){
    return myArray.media();
}

// Es 9
Array.prototype.revert = function() {
    var b = [];
    var c = this.length - 1;
    for (var i = 0; i < this.length; i++){
        b[c] = this[i];
        c = c - 1;
    }
    return a = b;
}

// Per Tiziano

function ex_9_P(myArray){
    return myArray.revert();
}

// Es 11

Array.prototype.oddFirst = function() {
    var pari = this.filter(x => (x % 2 == 0));
    var disp = this.filter(x => (x % 2 != 0));
    return disp.concat(pari);
}

// Per Tiziano

function ex_11_P(myArray){
    return myArray.oddFirst();
}