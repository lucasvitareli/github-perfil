import { useState, useEffect } from 'react';

const Formulario = () => {

    const [materiaA, setmateriaA] = useState(0);
    const [materiaB, setmateriaB] = useState(0);
    const [materiaC, setmateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente foi iniciado')

        return () => {
            console.log('O componente foi desmontado')
        }
    }, []);

    useEffect(() => {
        console.log('o estado nome foi alterado para : ' + nome)
    }, [nome]);

    useEffect(() => {
        console.log('A nota da matéria A foi alterado para : ' + materiaA)
    }, [materiaA]);

    useEffect(() => {
        console.log('A nota da matéria B foi alterado para : ' + materiaB)
    }, [materiaB]);

    useEffect(() => {
        console.log('A nota da matéria C foi alterado para : ' + materiaC)
    }, [materiaC]);

    const alteraNome = (evento) => {
        setNome(evento.target.value);
    }

    const renderResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        console.log(soma)
        console.log(media);

        if (media >= 7) {
            return <p>Olá {nome}, parabéns voce foi Aprovado</p>
        } else {
            return <p>Sinto muito {nome}, infelizmente voce foi Reprovado</p>
        }
    }



    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                    ))}
            </ul>
            <input type="text" placeholder='Seu nome' onChange={alteraNome} /> <br /><br />
            <input type="number" placeholder="Nota matéria A" onChange={({ target }) => setmateriaA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setmateriaB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setmateriaC(parseInt(evento.target.value))} />
            {renderResultado()}
        </form>
    )
}

export default Formulario;