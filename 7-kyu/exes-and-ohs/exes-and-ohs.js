function XO(str) {
    let xCount = 0;
    let oCount = 0;
  
    for(const l of str) {
      if(l.toLowerCase() == 'x') {
        xCount += 1;
      }
      if(l.toLowerCase() == 'o') {
        oCount += 1;
      }
    }
  
    if(xCount == oCount) {
      return true;
    }
  
    return false;
}