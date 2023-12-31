import React from "react";
import Titulo from "./Titulo";
import Produto from "./Produto";

function Produtos() {
  const produtos = [
    { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
    { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
    { nome: "TV", propriedades: ["Smart", "4k"] },
  ];
  return (
    <section>
      <Titulo cor="green" texto="Produtos" />
      {produtos.map((produto) => {
        return <Produto key={produto.nome} {...produto} />;
      })}
    </section>
  );
}

export default Produtos;
