import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  /* Variáveis CSS para cores e fontes */
  :root {
    --font-family: 'Poppins', sans-serif;
    --bg-color: #fafafa;
    --form-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    --form-radius: 8px;
    --title-color: #fff;
  }

  /* Reset básico */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  body {
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-color: var(--bg-color);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Título principal */
  h2 {
    color: var(--title-color);
  }

  #root {
    position: relative; /* Garante que elementos internos fiquem acima de pseudo-elementos */
    z-index: 1;
    top: 400px;
  }

  /* Estilo do formulário */
  form {
    box-shadow: var(--form-shadow);
    border-radius: var(--form-radius);
    background-color: white;
    padding: 1.5rem;
    max-width: 400px;
    width: 100%;
  }
`;

export default Global;
