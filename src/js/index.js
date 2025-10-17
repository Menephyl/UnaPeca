// index.js

// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll('.botao');
const personagens = document.querySelectorAll('.personagem');

botoes.forEach((botao, indice) => {
  botao.addEventListener('click', () => {
    // 1) Remove 'selecionado' de todos botões e personagens
    botoes.forEach(b => b.classList.remove('selecionado'));
    personagens.forEach(p => p.classList.remove('selecionado'));

    // 2) Adiciona 'selecionado' ao botão e ao personagem correspondentes
    botao.classList.add('selecionado');
    personagens[indice].classList.add('selecionado');

    
  });
});


// Após 3 segundos, exibe alerta convidando a clicar na logo
setTimeout(() => {
  alert('Clique na logo do One Piece para ver o anime gratuitamente!')
}, 3000)

const logos = document.querySelectorAll('.conteudo .logo');

logos.forEach(logo => {
  logo.addEventListener('click', () => {
    window.open(
      'https://pluto.tv/br/on-demand/series/62716e4481ecb700133b2aae/season/1/episode/62716e5681ecb700133b2df7?msockid=2d42ae3e0dbb68b11449bbdd0cc26942',
      '_blank'
    );
  });
});