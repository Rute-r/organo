import './Rodape.css';

const Rodape = () => {
  return (
    <div className="rodape-pagina">
      <div className="redes-socias">
        <img src="/imagens/fb.png" alt="logo facebook" />
        <img src="/imagens/tw.png" alt="logo twitter" />
        <img src="/imagens/ig.png" alt="logo instagram" />
      </div>

      <div className="logo-organo">
        <img src="/imagens/logo.png" alt="logo organo" />
      </div>

      <div className="creditos">
        <p> Desenvolvido por Alura.</p>
      </div>
    </div>
  );
};

export default Rodape;
