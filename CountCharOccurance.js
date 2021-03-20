var str = "babaacbadddea";

function countCharFrequency(str) {
    let sortedStr = str.split('').sort().join('');
    let len = str.length, counter = 1, result = '';
    for(let i=0; i<len; i++) {
        if(sortedStr[i] === sortedStr[i+1]) {
            counter++;
        } else {
            result = result + (sortedStr[i]+counter);
            counter = 1;
        }
    }
    return result;
}

var frequency = countCharFrequency(str);
console.log(frequency);