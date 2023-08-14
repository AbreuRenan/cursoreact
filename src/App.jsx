import React from "react";
import { Global } from "./GlobalContext";
import Form from "./Form";

function App() {
  return (
    <Global>
      <Form />
    </Global>
  );
}

export default App;
