// Es 1

Array.prototype.ex_1 = function(){ 
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


    
// Es 3

Array.prototype.ex_3 = function() {
        if(this.length == 0){
        return 0;
    }else{
       return this.reduce((acc, x) => acc + x, 0) / this.length;
    }
}


// Es 9
Array.prototype.ex_9 = function(){
    var b = [];
    var c = this.length - 1;
    for (var i = 0; i < this.length; i++){
        b[c] = this[i];
        c = c - 1;
    }
    return a = b;
}


// Es 11

Array.prototype.ex_11 = function() {
    var pari = this.filter(x => (x % 2 == 0));
    var disp = this.filter(x => (x % 2 != 0));
    return disp.concat(pari);
}

