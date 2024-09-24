import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import './App.css';
import { Books } from './Books';


// Tworzenie tablicy string
const kursy = [
  "Programowanie w C#",
  "Angular dla początkujących",
  "Kurs Django"
];

function LiczbaKursow(){
  return (
      <h2>Liczba kursów: {kursy.length}</h2>
  );
}

function ListaKursow(){
  const listaKursow = kursy.map(kurs => 
    <li>{kurs}</li> 
  );

  return (
    <ul>
      {listaKursow}
    </ul>
  );
}

function Formularz(){
  const [nazwa, setNazwa] = useState("");
  const [numer, setNumer] = useState(0);

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      Zatwierdz(nazwa, numer);
    }}>
      <label for="imie">Imię i nazwisko</label><br />
      <input type='text' id='imie' onChange={ e => setNazwa(e.target.value) } /><br />
      <label for="numer">Imię i nazwisko</label><br />
      <input type='number' id='numer' onChange={ e => setNumer(e.target.value) } /><br />
      <button type='submit'>Zatwierdź</button>
    </form>
  );

  
}

function Zatwierdz(nazwa, numer){
  console.log(nazwa);
  console.log(kursy[numer - 1]);
}

function App() {
  return (
    <>
      <LiczbaKursow />
      <ListaKursow />
      <Formularz />
      <Books />
    </>
  );
}

export default App;
