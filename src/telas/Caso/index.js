import React, { useState } from 'react';

const ObjSub = React.memo(({ sobrenome }) => {
    console.log(`Render Sub Obj ${sobrenome}`)
    return (
        <span> {sobrenome}</span>
    )
});

const Obj = React.memo(({ nome, sobrenome }) => {
    console.log(`Render Obj ${nome}`)
    return (
        <div>
            <span>{nome}</span>
            <ObjSub sobrenome={sobrenome} />
        </div>
    )
});



export default (props) => {
    const [cont, setCont] = useState(0);

    const [recarregar, setRecarregar] = useState(0);

    console.log('Render Container')
    return (
        <>
            <div>
                A exibição condicional do João,
                implica na destruição de toda a sua árvore!
            </div>
            <div>
                <button onClick={() => setCont(c => c + 1)} >Aumentar</button>
                <button onClick={() => setRecarregar(c => c + 1)} >Recarregar</button>

                {
                    cont % 2 == 1 && <Obj nome='João' sobrenome='Pedro' />
                }
                <Obj nome='Maria' sobrenome='Clara' />
            </div>
        </>
    )
};