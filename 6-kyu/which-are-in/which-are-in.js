function inArray(array1,array2){
  let ris = [];
  for(const parola of array2) {
    for(const sub of array1) {
      if(parola.includes(sub)) {
        if(!ris.includes(sub)) {
          ris.push(sub);
        }
      }
    }
  }
  return ris.sort();
}