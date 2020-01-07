import React from "react";

import Form from './components/Form'

function App() {
  return (
    <div>
      <Form />
      <p>
        Tudo que estiver fora do Form não sera re-renderizado.
        Melhor separar o componente por motivos de performance.
      </p>
    </div>
  );
}

export default App;
