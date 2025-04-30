import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  /* Adicionando o pseudo-elemento para o fundo */
  body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url('/image/universo.jpg'); /* Caminho correto para a imagem */
    background-size: cover; /* Faz a imagem cobrir todo o fundo */
    background-repeat: no-repeat; /* Não repete a imagem */
    background-attachment: fixed; /* Faz a imagem ficar fixa ao rolar a página */
    background-position: center; /* Alinha a imagem ao centro */
    filter: brightness(0.7) blur(2px); /* Escurece e aplica blur */
    -webkit-filter: brightness(0.7) blur(2px);
    z-index: -1;
  }

  /* Estilo do título */
  h2 {
    color: white;
  }

  #root {
    position: relative; /* Faz com que o conteúdo seja exibido acima do pseudo-elemento */
    z-index: 1;
  }

  /* Adicionando Box-shadow no formulário */
  form {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08); /* Efeito de sombra no formulário */
    border-radius: 8px;
  }

`;

export default Global;
