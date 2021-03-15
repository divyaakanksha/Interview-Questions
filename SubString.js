function subStringFinder(str, subStr){
    var idx = 0,
        i = 0,
        j = 0,
        len = str.length,
        subLen = subStr.length;
  
     for(; i<len; i++){
     
        if(str[i] == subStr[j]) {
          if(j == 0) {
            idx = i;
          }
          j++;
        } else {
          if( j !== 0) {
            i = idx;
            j=0;
          }
        }
        
        if (j == subLen)
          return idx;
    }
  
    return -1;
  }
console.log(subStringFinder('aabcaababcc', 'ab'));
console.log(subStringFinder('acaababcc', 'ab'));
console.log(subStringFinder('abbcdabbbbbck', 'bck'));
console.log(subStringFinder('eefghjtrdtyrrtyufxfgfgdfgd', 'rty'));
          