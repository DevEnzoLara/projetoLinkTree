function toggleMode(){
  const html = document.documentElement

  html.classList.toggle("light")
  /* Codigo acima fazendo o que todo o codigo com If e Else fez em 1 linha. Codigo abaixo também funciona mas foi feito na mão */

  // if (html.classList.contains('light')){
  //   html.classList.remove('light');
  // } else {
  //   html.classList.add('light');
  // }

  const img = document.querySelector("#profile img");

  if(html.classList.contains("light")) {
    img.setAttribute('src', 'assets/Avatar-light.png')
    img.setAttribute('alt', 'Avatar light') 
} else {
  img.setAttribute('src', 'assets/avatar.png')
  img.setAttribute('alt', 'Avatar modo dark')
}
}