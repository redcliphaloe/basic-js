module.exports = function transform( arr ) {
    if (!Array.isArray(arr)) {
        throw new Error();
      }    
    let result = [];
    const dn = '--discard-next';
    const ddn = '--double-next';
    const dp = '--discard-prev';
    const ddp = '--double-prev';
    for (let index = 0; index < arr.length; index++) {
        let checkB = index > 0; 
        let checkE = index < arr.length - 1;
        let prev = arr[index - 1]; 
        let curr = arr[index];
        let next = arr[index + 1];
        let k = 1;
        if (checkB && prev == dn) {
            k--;
        }
        if (checkB && prev == ddn) {
            k++;
        }      
        if (checkE && next == dp) {
            k--;
        }
        if (checkE && next == ddp) {
            k++;
        }          
        if (curr != dn && curr != ddn && curr != dp && curr != ddp) {
            for (let index = 1; index <= k; index++) {
                result.push(curr);                             
            }
            if (k < 1 && prev == dn && next == dp) {
                result.pop();
            }              
        }        
    }
    return result;
};