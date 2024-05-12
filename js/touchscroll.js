//touchscroll.js
//função para deslizar na tela sensivel ao toque
document.addEventListener('touchmove', (event) => {
    event.preventDefault(); //previne o comportamento padrao de rolagem

    var touch = event.touches[0]; //obtem o primeiro toque
    window.scrollBy(0, -touch.clientY); //deslisa a page com base no movimento do toque 
}, false);
