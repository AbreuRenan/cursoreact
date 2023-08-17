import React from "react";
import Radio from "./Forms/Radio";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: [
      "React.makeComponent()",
      "React.createComponent()",
      "React.createElement()",
    ],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

function App() {
  const [slideState, setSlideState] = React.useState(0);
  const [resultadoState, setResultadoState] = React.useState(null);
  const [respostasState, setRespostasState] = React.useState(
    perguntas.reduce((acumulador, pergunta) => {
      return { ...acumulador, [pergunta.id]: "" };
    }, {})
  );

  function handleChange({ target }) {
    setRespostasState({ ...respostasState, [target.id]: target.value });
  }

  function calcularResultado() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostasState[id] === resposta
    );
    setResultadoState(
      `Você acertou: ${corretas.length} de ${perguntas.length}`
    );
  }

  function proximoSlide(evt) {
    evt.preventDefault();
    if (slideState < perguntas.length - 1) {
      setSlideState(slideState + 1);
    } else {
      setSlideState(slideState + 1);
      calcularResultado();
    }
  }

  return (
    <>
      <form>
        {perguntas.map((pergunta, index) => {
          return (
            <Radio
              active={slideState === index}
              key={pergunta.id}
              {...pergunta}
              resposta={respostasState[pergunta.id]}
              onChange={handleChange}
            />
          );
        })}
        {resultadoState ? (
          <p>{resultadoState}</p>
        ) : (
          <button onClick={proximoSlide}>
            {slideState >= perguntas.length - 1 ? "Ver Resultado" : "Proximo"}
          </button>
        )}
      </form>
    </>
  );
}

export default App;
