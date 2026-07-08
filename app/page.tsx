"use client";

import ConversorDeMoedas from "./components/ConversorDeMoedas";
import Header from "./components/Header";


export default function Home() {


  return (
    <div className="flex flex-col flex-1  font-sans bg-(--background-color)">
      <Header/>
      <ConversorDeMoedas/>
    </div>
  );
}
