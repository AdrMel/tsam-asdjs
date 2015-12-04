function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}



/* 
 * START Esercizio Stack 
 */


var _0xd10d=["\x28\x20\x28\x20\x28\x20\x28\x20\x28\x20\x33\x33\x32\x31\x33\x20\x2A\x20\x32\x33\x33\x20\x29\x20\x2B\x20\x39\x39\x32\x31\x20\x29\x20\x2D\x20\x28\x20\x37\x33\x32\x31\x34\x31\x38\x20\x2B\x20\x33\x33\x32\x31\x32\x32\x20\x29\x20\x29\x20\x2D\x20\x31\x34\x31\x33\x32\x34\x32\x20\x29\x20\x2A\x20\x28\x20\x32\x34\x31\x34\x31\x30\x20\x2D\x20\x32\x34\x31\x34\x31\x39\x20\x29\x20\x29"];

function evaluateExpr(callback) {
	return callback(_0xd10d[0]);
}

/* END Esercizio Stack */

// Verifica funzione initialArray()
function sumAllArrayElements(myArray){
	var tot = 0;
		for(var i = 0; i < myArray.length; i++){
			tot += myArray[i];
		}
		return tot;
}

// Esercizio conta quanti 5070
function countN(myArray) { 
    if(myArray.length == 0) { 
        return 0; 
    } else { 
        if(myArray[0] == 5070) { 
            return 1 + countN(myArray.slice(1)); 
        } else {
            return 0 + countN(myArray.slice(1));
        }
    } 
}

// Esercizio radice della somma di quadrati dei num positivi

function sqrtSumAllPosSquared(myArray) { 
	var sum = 0;
	var num = 0;
    return Math.sqrt(myArray.filter(num => num % 2 == 0 && num > 0).reduce((sum, num) => sum + num * num, 0));
}

// Esercizio Stack

function Stack() {
    var items = [];
    this.push = function(elemento){
        items.push(elemento);
    };
    this.pop = function(){
        return items.pop();
    };
    this.peek = function(){
        return items[items.length-1];
    };
    this.isEmpty = function(){
        return items.length == 0;
    };
}

// Funzione di calcolo

function calcola(stringa){

    var v = new Stack();
    var s = new Stack();
    var myArray = stringa.split(" ");
    
    for(var i = 0; i < myArray.length; i++){
        switch(myArray[i]){
            
            case '+':
                s.push('+');
                break;
                
            case '-':
                s.push('-');
                break;
                
            case '*':
                s.push('*');
                break;
                
            case '/':
                s.push('/');
                break;
                
            case '(':
                s.push('(');
                break;
            
            case ')':
                var num1 = parseInt(v.pop());
                var num2 = parseInt(v.pop());
                var operat= s.pop();
                s.pop();
                switch(operat){
            
                    case '+':
                        v.push(num2 +num1);
                        break;
                
                    case '-':
                        v.push(num2 - num1);
                        break;
                
                    case '*':
                        v.push(num2 * num1);
                        break;
                
                    case '/':
                        v.push(num2 / num1);
                        break;
                }
                break;
                
            default:
                v.push(myArray[i]);
                break;
        }
    }
    return v.pop();
}

// Esercizio albero

function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }

}

BST.prototype.searchNodeR = function(node, e) {
    if (node == null) {
        return null;
    } else {
        if (node.item == e) {
            return node;
        } else {
            if (e > node.item) {
                return this.searchNodeR(node.right, e)
            } else {
                return this.searchNodeR(node.left, e)
            }
        }
    }
}

BST.prototype.searchNode = function(e) {
    return this.searchNodeR(this.root, e);
}

// Funzione inserimento array nell'albero
BST.prototype.insertArray = function(myArray) {

    for(var i = 0; i < myArray.length; i++){
        this.add(myArray[i]);
    }
   
}

// Funzione ricerca valore massimo

BST.prototype.maxValue = function(){
	return this.maxValueR(this.root);
}

BST.prototype.maxValueR = function(currentNode) {
  if(currentNode.right == null) {
  		return currentNode.item;
    } else {
    	return this.maxValueR(currentNode.right);
    } 
}
