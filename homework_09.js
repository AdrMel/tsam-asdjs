// Es 1

function esRic(myArray){
	if(myArray.length == 0){
		return 10;
	} else {
		return (5 * myArray[0]) + esRic(myArray.slice(1));
	}
}

function sumEvenSqrt(myArray){
    if(myArray.length == 0){
        return 0;
    } else {
        if(myArray[0] % 2 != 0){
            return sumEvenSqrt(myArray.slice(1));
        } else {
            return (myArray[0] * myArray[0]) + sumEvenSqrt(myArray.slice(1));
        }
    }
}

function ex_1(myArray){
    return sumEvenSqrt(myArray);
}

//Es 2

function sumEvenSqrtF(myArray){
    var pari = [];
    var tot = 0;
    pari = myArray.filter(x => x % 2 == 0); 
    pari.every(x => tot += x * x);
    return tot;
}

// Es 3

function Stack() {
    this.array = [];
}

Stack.prototype.push = function(e){
	this.array[this.array.length] = e;
};

Stack.prototype.pop = function(){
	var temp = this.array[this.array.length - 1];
	this.array.splice(this.array.length - 1, 1);
	return temp;
};

Stack.prototype.peek = function(){
	return this.array[this.array.length - 1];
};

Stack.prototype.isEmpty = function(){
	return this.array.length == 0;
};

function multEvenOdd(myArray){
    var pari = new Stack();
    var dispari = new Stack();

    for(var i = 0; i < myArray.length; i++){

        if(myArray[i] % 2 == 0){
            pari.push(myArray[i]);
        } else {
            dispari.push(myArray[i]);
        }
    }
    
    var n1 = 0;
    var n2 = 0;
    var result = new Stack();
    
  do {
        n1 = pari.pop(myArray[0]);
        n2 = dispari.pop(myArray[0]);
        result.push(n1 * n2);
    } while(!pari.isEmpty() && !dispari.isEmpty());
	
	var ris = 0;
    do {
		ris += result.pop(myArray[0]);
    } while(!result.isEmpty());
    
    return ris;
}

// Es 4

function Node(e){
	this.e = e;
	this.next = null;
	this.prev = null;
}

function LinkedList(nodo){
	 this.nodo = new Node();
}


LinkedList.prototype.add = function(index, e){
	if(node.next == null){
		
	}
}