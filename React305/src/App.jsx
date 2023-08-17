import React from "react";
import Produto from "./Produto";
import { GlobalStorage } from "./GlobalContex";

// https://ranekapi.origamid.dev/json/api/produto/tablet
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// https://ranekapi.origamid.dev/json/api/produto/notebook

function App() {
  return (
    <GlobalStorage>
      <div>
        <h1>React App</h1>
        <Produto />
      </div>
    </GlobalStorage>
  );
}
export default App;
