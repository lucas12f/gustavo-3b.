import { useState } from 'react'
import './App.css'
import Aptamil from './assets/img/aptamil.png'
import Bandagem from './assets/img/bandagem.png'
import Dipirona from './assets/img/dipirona.png'

export default function App() {

  const CLASSES = [
    { nome: "Remedio", emoji: "💊"},
    { nome: "Leite", emoji: "🍼"},
    { nome: "Curativo", emoji: "🩹"},
  ];

  const IMAGEM = [
    { nome: "Remedio", img:"Dipirona"},
    { nome: "Leite", img:"Aptamil"},
    { nome: "Curativo", img:"Bandagem"},
  ];

  //Variaveis useStates
  const [nome, setNome] = useState(""); //texto
  const [RS, setRS] = useState(0); //número
  const [classe, setClasse] = useState(CLASSES[0]); //objeto

  const Remedio = () => {
    setNome("DIPIRONA");
    setRS(30);
    setClasse(CLASSES[0]);
  }

  const Leite = () => {
    setNome("APTAMIL");
    setRS(45);
    setClasse(CLASSES[1]);
  }
  const Curativo = () => {
    setNome("BANDAGEM");
    setRS(36);
    setClasse(CLASSES[2]);
  }

  
  return (
    <>
      <main>
        <section>
          <h1>DROGASIL</h1>
         
         <div className="status">
          <p>VALOR:</p>
          <span>{RS}</span>
          <p>NOME:</p>
          <span>{nome}</span>
         </div>
          
          <div className="classes">
            <button onClick={Remedio}>💊 Remedio</button>
            <button onClick={Leite}>🍼 Leite</button>
            <button onClick={Curativo}>🩹 Curativo</button>
            </div>


        </section>
      </main>
    </>
  )
}

