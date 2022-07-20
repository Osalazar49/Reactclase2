import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const person = { name: "Pedro", age: "30", favoriteMovie: "im leyend" };

  return (
    <div className="App">
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      {/* <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

      <> </>

      <div>
        <ul>
          <li>
            {" "}
            <b>Nombre</b>:{person.name}
          </li>
          <li>
            {" "}
            <b>Edad</b>:30 años
          </li>
          <li>
            {" "}
            <b>Pelicula Favorita</b>
            {person.favoriteMovie}
          </li>
          <li>
            {" "}
            <b>Musica favorita</b>:Vallenato
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            {" "}
            <b>Nombre</b>:{person.name}
          </li>
          <li>
            {" "}
            <b>Edad</b>:30 años
          </li>
          <li>
            {" "}
            <b>Pelicula Favorita</b>
            {person.favoriteMovie}
          </li>
          <li>
            {" "}
            <b>Musica favorita</b>:Vallenato
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            {" "}
            <b>Nombre</b>:{person.name}
          </li>
          <li>
            {" "}
            <b>Edad</b>:30 años
          </li>
          <li>
            {" "}
            <b>Pelicula Favorita</b>
            {name.favoriteMovie}
          </li>
          <li>
            {" "}
            <b>Musica favorita</b>:Vallenato
          </li>
        </ul>
      </div>

      <div>
        <ul>
          <li>
            {" "}
            <b>Nombre</b>:{person.name}
          </li>
          <li>
            {" "}
            <b>Edad</b>:30 años
          </li>
          <li>
            {" "}
            <b>Pelicula Favorita</b>
            {name.favoriteMovie}
          </li>
          <li>
            {" "}
            <b>Musica favorita</b>:Vallenato
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
