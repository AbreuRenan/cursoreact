import React from "react";
import Input from "./input";

import { globalContext, Global } from "./GlobalContext";

function Form() {
  console.log("form montou");
  // const global = React.useContext(globalContext);
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    Array.from(event.target)
      .filter((el) => {
        if (el.tagName.toLowerCase() === "input") return el;
      })
      .map((input) => {
        const { id, value } = input;
        setForm({ ...form, [id]: value });
      });
    console.log(form);

    // fetch("https://ranekapi.origamid.dev/json/api/usuario", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form),
    // }).then((response) => {
    //   global.storeResponse(response);
    // });
  }
  return (
    <>
      <h1>Form App {Math.floor(Math.random() * 1000)}</h1>
      <form onSubmit={(e) => submitHandler(e)}>
        <button>Enviar</button>
        <Input label="Nome" id="nome" type="text" />
        <Input label="Email" id="email" type="email" />
        <Input label="Senha" id="senha" type="password" />
        <Input label="CEP" id="cep" type="text" />
        <Input label="Rua" id="rua" type="text" />
        <Input label="Numero" id="numero" type="number" />
        <Input label="Bairro" id="bairro" type="text" />
        <Input label="Cidade" id="cidade" type="text" />
        <Input label="Estado" id="estado" type="text" />
      </form>
    </>
  );
}

export default Form;
