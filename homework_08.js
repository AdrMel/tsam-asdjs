function merge(array1,array2){
	var mergedArr = [];
	var i = 0;
	var j = 0;

        while(i < array1.length && j < array2.length){
            if(array1[i]<array2[j]){
                mergedArr.push(array1[i]);
                i++;
            } else {
                mergedArr.push(array2[j]);
                j++;
            }
        }
	
	return mergedArr.concat(array1.slice(i)).concat(array2.slice(j));
}

function mergeSort(myArray){
	if(array.length == 1){
		return myArray;
	 }
	var a = Math.floor(myArray.length / 2);
	return merge(mergeSort(myArray.slice(0, a)), mergeSort(myArray.slice(a)));
}