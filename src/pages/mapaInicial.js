import { useEffect, useState, useRef } from 'react';
import './mapaInicial.css'
import { templateMapa } from './templateMapa';
import { RepetidorBlocos, RepetidorCaminhos } from '../scripts/repetidores.js'

export function MapaInicial(props) {
    const ref = useRef([null])
    const refCaminhos = useRef([null])
    const [dimensoes, setDimensoes] = useState([])
  
    const updateParent = () => {
      props.onUpdate(dimensoes)
    }
  
    useEffect(() => {
      updateParent()
    }, [dimensoes])
  
    useEffect(() => { 
      setDimensoes(templateMapa(ref, refCaminhos, dimensoes))
  }, [])
    
    return (
      <>
        <p
          className='textoCorredorInfinito'
        >
          Corredor infinito<span className='textoDeBaixo'>(ou será que não?)</span>
        </p>
        <p
          className='textoCorredorSobre'
        >
          About
        </p>
        <RepetidorBlocos quantidade={6} pagina={'Inicial'} ref={ref}/>
        <RepetidorCaminhos quantidade={3} pagina={'Inicial'} ref={refCaminhos}/>
      </>
    )
  }