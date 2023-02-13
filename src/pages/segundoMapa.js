import { useEffect, useState, useRef} from 'react';
import { templateMapa } from './templateMapa';
import './segundoMapa.css'
import { RepetidorBlocos } from '../scripts/repetidores';

export function SegundoMapa(props) {
    const ref = useRef([null])
    const refCaminhos = useRef([null])
    const [dimensoes, setDimensoes] = useState()

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
        <div className='about'>
          <p className='titulo'>Ghost Game <span className='criador'>Por: Thiago Crepequer</span></p>
          <p className='textoAbout'>Objetivo:</p>
          <p className='textoAbout'>Esse projeto foi criado com o propósito de praticar o desenvolvimento em JavaScript e da biblioteca React</p>
          <p>Features:</p>
          <ul className='listaFeatures'>
            <li>Movimentação do personagem</li>
            <li>Sistema de colisão do fantasma com as paredes</li>
            <li>Troca de páginas dinamicamente</li>
            <li>Corredor "infinito"</li>
          </ul>
        </div>
        
          <RepetidorBlocos quantidade={4} pagina={'Segundo'} ref={ref}/>
          <div
            className='caminhos cSegundo0'
            ref={el => (refCaminhos.current[0] = el)}
          />
        </>
      )
}