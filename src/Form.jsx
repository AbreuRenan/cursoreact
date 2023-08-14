import React from "react";
import Input from "./input";

function Form() {
  console.log("form montou");
  const [response, setResponse] = React.useState(null);
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
    const formObj = Array.from(event.target)
      .filter((el) => {
        if (el.tagName.toLowerCase() === "input") return el;
      })
      .map((input) => {
        const { id, value } = input;
        return { [id]: value };
      });
    console.log(formObj);
    setForm(formObj);
    console.log(form);

    // fetch("https://ranekapi.origamid.dev/json/api/usuario", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(form),
    // }).then((response) => {
    // setResponse(response);
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
