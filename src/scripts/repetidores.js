import React from 'react';

export const RepetidorBlocos = React.forwardRef((props, ref) => {
    const blocos = []

    for(let i=0; i <= props.quantidade; i++) {
        if(props.style) {
            blocos.push(
                <div
                    key={i}
                    className={`objeto o${props.pagina}${i}`}
                    ref={el => (ref.current[i] = el)}
                    style={{
                        left: props.style.left,
                        width: props.style.width
                    }}
                />
            )
        } else {
            blocos.push(
                <div 
                  key={i}
                  className={`objeto o${props.pagina}${i}`}
                  ref={el => (ref.current[i] = el)}
                />
            )
        }   
    }
    return blocos
})

export const RepetidorCaminhos = React.forwardRef((props, ref) => {
    const blocos = []

    for(let i = 0; i < props.quantidade; i++) {
        blocos.push(
            <div
                key={i}
                className={`caminhos c${props.pagina}${i}`}
                ref={el => (ref.current[i] = el)}
            />
        )
    }
    return blocos
})