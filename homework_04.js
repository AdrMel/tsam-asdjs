function Stack() {
    this.array = [];
}

// inserisce l'elemento in coda all'array
Stack.prototype.push = function(e){
	this.array[this.array.length] = e;
};

// inserisce l'elemento al penultimo posto dell'array
Stack.prototype.pop = function(){
	var temp = this.array[this.array.length - 1];
	this.array.splice(this.array.length - 1, 1);
	return temp;
};

// guarda l'elemento alla penultima posizione
Stack.prototype.peek = function(){
	return this.array[this.array.length - 1];
};

// controlla se l'array è vuoto
Stack.prototype.isEmpty = function(){
	return this.array.length == 0;
};


function dec2bin(n){
    var binario = new Stack();   
    var resto = 0;
        for(var i = n; i > 0; i = Math.floor(i / 2)){
            resto = i % 2;
            binario.push(resto);
        }
        var stringBinario = "";
        	while (!binario.isEmpty()) {
				stringBinario += binario.pop();
		}
	return stringBinario;
}
