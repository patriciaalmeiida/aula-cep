import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [cidade, setCidade] = useState<string>("");

  const [cep, setCep] = useState<string>("");

  const getCep = () => {
    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((resposta) => setCidade(resposta.data.localidade));
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" onChange={(event) => setCep(event.target.value)} />

        <button onClick={getCep}>Ver CEP</button>

        <h1>Cidade</h1>
        {
          <>
            <p>{cidade}</p>
          </>
        }
      </header>
    </div>
  );
}

export default App;
