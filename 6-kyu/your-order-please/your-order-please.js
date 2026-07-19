function order(words){
  let lista = words.trim().split(' ');
  
  for(let i = 1; i < lista.length; i+=1) {
    let parola = lista[i];
    let key = lista[i].match(/\d+/)[0];
    let j = i-1;
    
    while(j >= 0 && lista[j].match(/\d+/)[0] > key) {
      lista[j+1] = lista[j];
      j = j-1;
    }
    lista[j+1] = parola;
  }
  
  return lista.join(' ');
}