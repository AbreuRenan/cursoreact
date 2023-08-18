import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import Sobre from "./Sobre";
import NotFound from "./NotFound";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="sobre" element={<Sobre />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

function numeroPrimos(num) {
  const primos = [];
  if (num < 2) {
    return "Insira numero maior que 1";
  }
  for (let i = 0; i <= num; i++) {
    for (let j = 0; j <= num; j++) {
      if (i % j === 0) {
        primos.push(j);
      }
    }
  }
  return primos;
}
