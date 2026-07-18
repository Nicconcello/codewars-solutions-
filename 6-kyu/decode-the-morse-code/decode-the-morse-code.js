decodeMorse = function(morseCode){
  // you can use the preloaded MORSE_CODE:
  // let letter = MORSE_CODE[morse]
  
  // Your code here
  let output = [];
  const parole = morseCode.trim().split('   ');
  
  for(const parola of parole) {
    const lettere = parola.split(' ');
    let parolaDecodificata = "";
    for(const lettera of lettere) {
      if(lettera !== '') {
        parolaDecodificata += MORSE_CODE[lettera];
      }
    }
    output.push(parolaDecodificata);
  }
  
  return output.join(' ');
}