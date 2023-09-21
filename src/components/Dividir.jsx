function Dividir({numeroUno, numeroDos}){
    let division = null
    if(numeroDos > 0){
        division = numeroUno/numeroDos
    } else {
        division = null
    }
    return(
        <section>
             <div>La suma es: {division}</div>
        </section>
    )
}

export default Dividir