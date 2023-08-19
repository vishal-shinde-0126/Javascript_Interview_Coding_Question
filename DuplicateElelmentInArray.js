//  find the duplplicate element of the array
// method : 1

function duplicateElement(array) {
    // here initialize the empty array to stored duplicate element
    const duplicate = []
    // here defined the for loop to iterate the array element 
    for (let i = 0; i < array.length; i++) {

        for (let j = i + 1; j < array.length; j++) {
            //Here check if the element of array[i]=== array[j] if its true
            // also check duplicate (duplicate array) include the givne array or not 
            //if  not include both conditon true then then push elemnt into emepty array
            if (array[i] == array[j] && !duplicate.includes(array[i])) {
                duplicate.push(array[i]);
            }
        }
    }
    // we need to return this function
    return duplicate
}
// here we have to call the function 
var array = [2, 2, 3, 4, 5, 66, 66, 7, 8, 7];
const duplicateValue = duplicateElement(array);
console.log('duplicateValue :', duplicateValue);


// method: 2