// Es 1

function sumWhileNeg(){ 
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
    Array.prototype.ex_1 = sumWhileNeg();

// Es 3

Array.prototype.media = function media() {
        if(this.length == 0){
        return 0;
    }else{
       return this.reduce((acc, x) => acc + x, 0) / this.length;
    }
}

//Per Tiziano

Array.prototype.ex_3 = media();


// Es 9
function revert(){
    var b = [];
    var c = this.length - 1;
    for (var i = 0; i < this.length; i++){
        b[c] = this[i];
        c = c - 1;
    }
    return a = b;
}

// Per Tiziano

fArray.prototype.ex_11 = revert();

// Es 11

 function oddFirst() {
    var pari = this.filter(x => (x % 2 == 0));
    var disp = this.filter(x => (x % 2 != 0));
    return disp.concat(pari);
}

Array.prototype.ex_11 = oddFirst();

