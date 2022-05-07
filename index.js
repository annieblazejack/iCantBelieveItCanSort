function iCantBelieveItCanSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}

function swap(array, i, j){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

console.log(iCantBelieveItCanSort([678,234,234456,345,35]));
console.log(iCantBelieveItCanSort([345,3456,34576,5687,567,132,2,3,1,5,4,3,-4,-1.3]));