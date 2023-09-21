import Suma from "./Suma";
import Restar from "./Restar";
import Multiplicar from "./Multiplicar";
import Dividir from "./Dividir";
import { useState } from "react";

const Calculadora = () => {
  let promesa = new Promise((resolve, reject) => {
    function salidaTemprano() {
      let hora = 8;
      if (hora > 9) {
        return "Salida temprano";
      } else {
        return "Horario normal";
      }
    }
    let respuestaSalida = salidaTemprano();
    if (respuestaSalida === "Salida temprano") {
      resolve();
    } else {
      reject();
    }
  });
  promesa.then(()=>{
    console.log('Se cumplió la promesa')
  }).catch(()=>{
    console.log('No Se cumplió la promesa')
  })

  const [numeroUno, setNumeroUno] = useState(0);
  const [numeroDos, setNumeroDos] = useState(0);
  console.log(numeroUno, numeroDos);
  return (
    <section>
      <form action="">
        <input onChange={(e) => setNumeroUno(e.target.value)} />
        <input onChange={(e) => setNumeroDos(e.target.value)} />
      </form>
      <section>
        <Suma numeroUno={numeroUno} numeroDos={numeroDos} />
        <Restar numeroUno={numeroUno} numeroDos={numeroDos} />
        <Multiplicar numeroUno={numeroUno} numeroDos={numeroDos} />
        <Dividir numeroUno={numeroUno} numeroDos={numeroDos} />
      </section>
    </section>
  );
};

export default Calculadora;
