function check(arr) {
    let len = arr.length;
    let res = arr;
    let map = {};
    for(let i = 0; i < len ; i++) {
        if(map.hasOwnProperty(arr[i])) {
            res = res.filter(function(item) {
            return item !== arr[i]
        })
        } else {
            map[arr[i]] = arr[i];
        }
    }
    return res;

}

const a = [2,3,2,3,5];
console.log(check(a));