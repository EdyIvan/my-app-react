import React, {useState, Fragment} from 'react';
const Contador =() => {

    const [valor, setValor] = useState(0);
    const [numero, setNumero] = useState(0);

    const IncrementoDos = () => {
        setNumero(numero + 1);
        console.log("Mensaje de contador");
    }

    return(
        <div>
            <button onClick={() => setValor(valor + 1)}> Contador1 </button>
            <span> Incremento de contador1: {valor}</span>
            <hr />
            <button onClick={IncrementoDos}>Contador2 </button>
            <span> Incremento de contador2: {numero}</span>
        </div>
    );
}
export default Contador;

/*
//import react from 'react';
import React, {useState, Frament, Fragment} from 'react';

const Contador = () => {
    
    //"numero" nombre del estado
    //"setNumero" es su modificador
    //Se puede iniciar con numero, strinf, boleano, obj, etc.
    const [numero, setNumero] = useState(0);

    //Definiendo función flecha que incremente un valor
    const aumentar = () => {
        console.log('Hacer click')
        setNumero(numero + 1)
    }

    //Dentro de HTML, se da lectura en llaves a las variables
    //Se puede devolver sólo un elemento..., caso contrario
    //Se puede usar <Fragment>, tambien <div>
    //En el evento onClick se llama a la función flecha entre llaves
    return (
        <div>
            <h3>mi primer componente {numero}</h3>
            <button onClick={aumentar}>Aumentar</button>
        </div>
    );
}

export default Contador;
*/