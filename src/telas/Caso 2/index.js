import React, { useState } from 'react';

const Obj = React.memo( ({ nome }) => {
    console.log(`Render Obj ${nome}`)
    return (
        <div>{nome}</div>
    )
});

export default (props) => {
    const [cont, setCont] = useState(0);

    console.log('Render Container')
    return (
        <>
            <div>
                Os compoenentes só serão renderizados,
                caso haja alteração em suas propriedades
            </div>
            <div>
                <button onClick={() => setCont(c => c + 1)} >Aumentar</button>
                <Obj nome='João' />
                <Obj nome='Maria' />
            </div>
        </>
    )
};