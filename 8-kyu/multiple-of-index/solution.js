//Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
function multipleOfIndex(array) {
    let result = []; 
    
    if(array[0] ===0){ 
    result.push(array[0]);
    }
    
    for (let i = 1; i < array.length; i++){ 
        if(array[i] % i === 0) { 
            result.push(array[i]); 
        }
    }
    return result;
}