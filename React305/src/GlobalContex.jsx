import React from "react";
export const GlobalContext = React.createContext();

export function GlobalStorage({ children }) {
  const [dados, setDados] = React.useState(null);
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const preferenciaLocal = window.localStorage.getItem("produtoPreferencial");
    if (preferenciaLocal) setProduto(preferenciaLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  const limparDados = () => {
    setDados(null);
    setProduto(null);
    window.localStorage.clear();
  };

  return (
    <GlobalContext.Provider
      value={{
        dados,
        setDados,
        produto,
        setProduto,
        limparDados,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalStorage;
