import React from "react";
import { GlobalContext } from "./GlobalContex";

function Produto() {
  const global = React.useContext(GlobalContext);
  const { produto, dados } = global;

  React.useEffect(() => {
    if (produto !== null)
      window.localStorage.setItem("produtoPreferencial", produto);
  }, [produto]);

  const getDadosProduto = ({ target }) => {
    global.setProduto(target.value);
  };

  return (
    <>
      <div>
        <h3>Preferencia: {produto ? produto : "nenhum"}</h3>
        <button onClick={getDadosProduto} value="notebook">
          Notebook
        </button>
        <button onClick={getDadosProduto} value="smartphone">
          Smartphone
        </button>
        <button onClick={() => global.limparDados()}>Limpar Dados</button>
      </div>
      <div>
        <hr />
        <h2>Produto: {dados && produto}</h2>
        <p>R$ {dados && dados.preco}</p>
        <img
          style={{ height: "200px" }}
          src={dados && dados.fotos[0].src}
          alt={dados && dados.nome}
        />
      </div>
    </>
  );
}

export default Produto;
