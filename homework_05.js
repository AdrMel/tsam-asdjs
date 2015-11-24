function Stack() {
    this.array = [];
}

// inserisce l'elemento in coda all'array
Stack.prototype.push = function(e){
	this.array[this.array.length] = e;
};

// prende l'elemento all' ultimo posto dell'array
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


function rpn(stringa){
    var arrString = stringa.split(" ");
    var a = 0;
    var b = 0;
    var ris = 0;
    var stack = new Stack();
       
        for(var i = 0; i < arrString.length; i++){
            switch(arrString[i]){
                case "+":
                    a = stack.pop();
                    b = stack.pop();
                    ris = b + a;
                    stack.push(ris);
                    break;
                case "-":
                    a = stack.pop();
                    b = stack.pop();
                    ris = b - a;
                    stack.push(ris);
                    break;
                case "*":
                    a = stack.pop();
                    b = stack.pop();
                    ris = b * a;
                    stack.push(ris);
                    break;    
                case "/":
                    a = stack.pop();
                    b = stack.pop();
                    ris = b / a;
                    stack.push(ris);
                    break;    
                default:
                    stack.push(parseInt(arrString[i])); 
                    break;
            }
        }
   return stack; 
}

