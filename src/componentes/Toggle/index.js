import './Toggle.css';

function Toggle({ toggleFormulario }) {
  return (
    <>
      <button className="botaoToggle" onClick={toggleFormulario}>
        <img src="/imagens/botao.png" alt="botao de alterar visibilidade de formulario" />
      </button>
    </>
  );
}

export default Toggle;
