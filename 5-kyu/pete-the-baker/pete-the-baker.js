function cakes(recipe, available) {
  let nMax = Number.MAX_SAFE_INTEGER;
  
  for(const chiave in recipe) {
    const nR = recipe[chiave];
    const nA = available[chiave];
    if(!nA) {
      return 0;
    }
    const n = nA / nR;
    const nInt = Math.trunc(n);
    
    if(nInt < nMax) {
      nMax = nInt;
    }
  }
  console.log(nMax);
  return nMax;
}