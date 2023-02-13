import { useEffect, useState, useRef} from 'react';
import { templateMapa } from './templateMapa';
import './terceiroMapa.css'
import { colisaoParedes } from '../scripts/colisaoParedes.js';
import { RepetidorBlocos } from '../scripts/repetidores.js';

export function TerceiroMapa(props) {
    const ref = useRef([null])
    const refCaminhos = useRef([null])
    const [dimensoes, setDimensoes] = useState()
    const [screenSize, setScreenSize] = useState()
    const [left, setLeft] = useState()
    const [width, setWidth] = useState()
    const [xBlocos, setXBlocos] = useState()
    const [TamanhPortal, setTamanhPortal] = useState(5)

    useEffect(() => {
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, [])

    const updateParent = () => {
        props.onUpdate(dimensoes)
      }

    useEffect(() => {
        if(dimensoes) {
            if(xBlocos) { 
                dimensoes[2].x = xBlocos
                dimensoes[3].x = xBlocos
            }
            setLeft(dimensoes[4].x)
            setWidth(dimensoes[4].width)
            setXBlocos(dimensoes[2].x)
            updateParent()
        }
      }, [dimensoes, xBlocos])
              
    useEffect(() => { 
        setDimensoes(templateMapa(ref, refCaminhos, dimensoes))
    }, [xBlocos])

    useEffect(() => {
        function eventClick(event) {
            let tecla = event.key.toLowerCase();
              if (tecla === 'a' || tecla === 'arrowleft') {
                if(colisaoParedes(props.top, props.left, dimensoes, props.width1, props.height1)) return

                if(props.left - 10 < 0) {
                    setTamanhPortal(20)
                    setLeft(left + 10)
                    setWidth(width - 10)
                    setXBlocos(xBlocos + 10)
                }
              }

              if (tecla === 'd' || tecla === 'arrowright') {
                if(props.left > screenSize.width - 90) {
                    setLeft(left - 10)
                    setWidth(width + 10)
                    if(xBlocos > dimensoes[1].width * -1) {
                        setXBlocos(xBlocos - 10)
                    }
                }
              }
          }
      
          window.addEventListener('keydown', eventClick);
          return () => window.removeEventListener('keydown', eventClick);
    }, [left, width, screenSize, props, dimensoes, xBlocos])

    const style = {
        left: xBlocos
    }

    return (
        <>
            <div className='container'>
                <div
                    className='objeto oTerceiro4'
                    ref={el => (ref.current[4] = el)}
                    style={{
                        left: left,
                        width: width
                    }}
                />
                <div
                    className='objeto oTerceiro5'
                    ref={el => (ref.current[5] = el)}
                    style={{
                        left: left,
                        width: width
                    }}
                />
                <RepetidorBlocos quantidade={3} pagina={'Terceiro'} ref={ref} style={style}/>
            </div>
            <div
                className='cTerceiro0'
                ref={el => (refCaminhos.current[0] = el)}
                style={{
                    left: xBlocos,
                    width: TamanhPortal + 'px'
                }}
                />  
        </>  
    )
    
}