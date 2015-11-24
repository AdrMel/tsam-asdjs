function Queue(n) {
    this.myArray = new Array(n);
    this.length = this.myArray.length;
}

Queue.prototype.enqueue = function(e) {
    this.myArray.unshift(e);
}

Queue.prototype.push = function(el){
    if(this.lastInsert + 1 == this.myArray.length){
        this.lastInsert = 0;
    } else {
        this.lastInsert++;
        this.myArray[this.lastInsert] = el;
       }
    }

Queue.prototype.pop = function() {
    if(this.lastDelete + 1 == this.array.length){
        this.lastDelete = 0;
    } else {
        this.lastDelete++;
        var temp = this.myArray[this.lastDelete];
        this.myArray[this.lastDelete] = undefined;
        return temp;
    }
}

Queue.prototype.isEmpty = function() {
    return this.array.length == 0;
}

Queue.prototype.peek = function() {
    return this.myArray[lastInsert];
}

function f(n){
    var circQueue = new Queue(n);
    return circQueue.length;
}