import React from "react";
import Input from "./input";

function Form() {
  const [response, setResponse] = React.useState(null);
  const [erro, setErro] = React.useState(null);
  const [carregando, setCarregando] = React.useState(false);
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
    setCarregando(true);
    console.log(carregando);
    const formObj = Array.from(event.target)
      .filter((elemento) => elemento.tagName.toLowerCase() === "input")
      .reduce((formInputs, atualInput) => {
        const { id, value } = atualInput;
        return { ...formInputs, [id]: value };
      }, {}); // Não esquecer de passar o inicializador no reduce para evitar que o react insira dados indesejados.

    setForm(formObj);

    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((r) => {
        setResponse(r);
        return r.json();
      })
      .then((json) => {
        console.log(json);
      })
      .catch((err) => {
        setErro(err.message);
      });
  }

  return (
    <>
      <h1>Form App </h1>
      <p>{carregando && "Enviando..."}</p>
      <p>{response && !erro && "Enviado com Sucesso"}</p>
      <form onSubmit={(e) => submitHandler(e)}>
        <button>Enviar</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log("carregando", carregando);
            console.log("response", response);
            console.log("erro", erro);
          }}
        >
          Log
        </button>
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
