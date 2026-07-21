function alphabetPosition(text) {
  const alfabeto = "abcdefghijklmnopqrstuvwxyz";
  let res = "";
  
  for(const lettera of text) {
    if(alfabeto.includes(lettera.toLowerCase())) {
      res += alfabeto.indexOf(lettera.toLowerCase()) + 1;
      res += " ";
    }
  }
  return res.trimEnd();
}