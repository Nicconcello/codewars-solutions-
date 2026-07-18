function sumTwoSmallestNumbers(numbers) {  
  let primo = Number.MAX_SAFE_INTEGER;
  let secondo = Number.MAX_SAFE_INTEGER;
  
  for(const n of numbers) {
    if(n < primo) {
      secondo = primo;
      primo = n;
    } else {
      if(n < secondo) {
        secondo = n;
      }
    }
  }
  let ris = primo + secondo;
  return ris;
}