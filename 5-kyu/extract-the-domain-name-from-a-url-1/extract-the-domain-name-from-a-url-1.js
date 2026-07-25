function domainName(url){
  console.log(url);
  const parti = url.trim().split('.');
  
  if(parti[0].startsWith("http://www") || parti[0].startsWith("https://www")) {
    return parti[1];
  }
  
  if(parti[0].startsWith("www")) {
    return parti[1];
  }
  
  if(parti[0].startsWith("http://") || parti[0].startsWith("https://")) {
    const sudd = parti[0].trim().split('/').filter(Boolean);;
    console.log(sudd);
    return sudd[1];
  }
  
  return parti[0];
}