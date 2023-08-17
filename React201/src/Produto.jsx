import React from "react";

function Produto(props) {
  const { nome, propriedades } = props;
  return (
    <div style={{ border: "1px solid", margin: "1rem 0", padding: "1rem" }}>
      {nome}
      <ul>
        {propriedades.map((propriedade) => {
          return <li key={propriedade}>{propriedade}</li>;
        })}
      </ul>
    </div>
  );
}

export default Produto;
