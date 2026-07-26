function count(string) {
  let diz = {};
  
  for(const lettera of string) {
    if(lettera in diz) {
      let val = diz[lettera];
      val += 1;
      diz[lettera] = val;
    } else {
      diz[lettera] = 1;
    }
  }
  return diz;
}