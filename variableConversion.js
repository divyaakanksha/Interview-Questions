var temp = "thisIsAVariable";
var temp1 = "this_is_a_variable";

function variableConversion(temp) {
    var result = '';
    if(temp.includes("_")) {
        for(let i=0; i< temp.length; i++) {
            if(temp[i] === "_") {
                result = result + temp[i+1].toUpperCase();
                i++;
            } else {
                result = result + temp[i];
            }
        }
    } else {
        for(let i=0; i< temp.length; i++) {
            if(temp[i] === temp[i].toUpperCase()) {
                result = result + "_" + temp[i].toLowerCase();
            } else {
                result = result + temp[i];
            }
        }
    }
    return result;
}

console.log(variableConversion(temp1));