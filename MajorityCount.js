var n = 3;
var a = [1,2,1,3,4,1,3,1,1];

function findMajority(a) {
    let len = a.length, maxCount=0, index = -1;
    for(let i=0; i< len; i++) {
        let count = 0;
        for(let j=0;j<len;j++) {
            if(a[i] === a[j]) {
                count++;
            }
        }

        if(count > maxCount){
            maxCount = count;
            index = i;
        }
    }
    if(maxCount > len/2) {
        return a[index];
    } else {
        console.log(maxCount);
        return -1;
    }
}
var val = findMajority(a);
console.log(val);
