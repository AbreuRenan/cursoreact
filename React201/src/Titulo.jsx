import React from "react";

function Titulo(props) {
  return <h1 style={{ color: props.cor }}>{props.texto}</h1>;
}

export default Titulo;
