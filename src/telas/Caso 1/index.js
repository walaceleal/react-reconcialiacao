import React, { useState } from 'react';

const Obj = ({ nome }) => {
    console.log(`Render Obj ${nome}`)
    return (
        <div>{nome}</div>
    )
};

export default (props) => {
    const [cont, setCont] = useState(0);

    console.log('Render Container')
    return (
        <>
            <div>
                Sempre que o elemento pai é atualizado.
                Todos os filhos serão atualizados, mesmo que eles não precisem!
            </div>
            <div>
                <button onClick={() => setCont(c => c + 1)} >Aumentar</button>
                <Obj nome='João' />
                <Obj nome='Maria' />
            </div>
        </>
    )
};