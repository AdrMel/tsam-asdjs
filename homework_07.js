function QueueItem(i, p){
	this.item = i;
	this.priority = p;
}

function PriorityQueue(){
	this.myArray=[];
}

PriorityQueue.prototype.enqueue = function(e) {
	if(this.myArray.length == 0){
			this.myArray.push(e);
	} else {
		for(var i  =0; i < this.myArray.length; i++){

			if(e.priority < this.myArray[i].priority){
			     this.myArray.splice(i, 0, e);
				 return true;
			}
		}

		this.myArray.push(e);
	}
}

PriorityQueue.prototype.dequeue = function() {
	return this.myArray.pop();
}

PriorityQueue.prototype.front = function() {
	return this.myArray[this.myArray.length - 1];
}


PriorityQueue.prototype.isEmpty = function() {
	return this.myArray.size == 0;
}

PriorityQueue.prototype.size = function() {
	return this.myArray.length;
}


function PriorityQueueC(Callback){
	this.myArray = [];
	this.ok = Callback;
}

PriorityQueueC.prototype.enqueue = function(e) {
	if(this.myArray.length == 0){
			this.myArray.push(e);
	} else {
		for(var i = 0; i < this.myArray.length; i++){
			if(this.ok == -1)
			{
				this.myArray.splice(i, 0, e);
				return true;
			}
		}
		 this.myArray.push(e);
	}
}

PriorityQueueC.prototype.dequeue = function() {
	return this.myArray.pop();
}

PriorityQueueC.prototype.front = function() {
	return this.myArray[this.myArray.length -1];
}

PriorityQueueC.prototype.isEmpty = function() {
	return this.myArray.size == 0;
}

PriorityQueueC.prototype.size = function() {
	return this.myArray.length;
}