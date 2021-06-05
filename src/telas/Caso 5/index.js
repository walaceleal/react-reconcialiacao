import React, { useState } from 'react';

export default (props) => {
    const [cont, setCont] = useState(0);
    const A = React.useMemo(() => {
        console.log(`Render A`)
        return (
            <span> A </span>
        )
    }, []);


    console.log('Render Container')

    return (
        <>
            <div>
                A exibição condicional do João,
                implica na destruição de toda a sua árvore!
            </div>
            <div>
                <button onClick={() => setCont(c => c + 1)} >Aumentar</button>

                {cont % 2 == 1 && (
                    <div>{A}</div>
                )}
            </div>
        </>
    )
};