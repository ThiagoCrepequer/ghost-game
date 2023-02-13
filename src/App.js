import { useEffect, useState, useRef } from 'react';
import './App.css';
import { MapaInicial } from './pages/mapaInicial.js'
import { SegundoMapa } from './pages/segundoMapa.js'
import { TerceiroMapa } from './pages/terceiroMapa.js' 
import { colisaoParedes } from './scripts/colisaoParedes.js';

function Ghost(props) {
  const [left, setLeft] = useState('50%')
  const [top, setTop] = useState('10vh')
  const [transform, setTransform] = useState(1)
  const [screenSize, setScreenSize] = useState({})
  const [dimensoes, setDimensions] = useState()
  const ghost = useRef(null)
  const height1 = 109
  const width1 = 70
  const [mapaAtual, setMapaAtual] = useState('MapaInicial')

  const updateParentVariable = (dimensoes) => {  
    setDimensions(dimensoes)
  }

  useEffect(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, [])

  useEffect(() => {
    const element = ghost.current
    const rect = element.getBoundingClientRect()

    setTop(rect.top) 
    setLeft(rect.left)
  }, [])

  useEffect(() => {
    function testeCaminhos(top, left) {
      dimensoes[dimensoes.length - 1].map((element, index) => {
        let {height, width, x, y} = element
        
        if(left < x + width && left + width1 > x && top < y + height && top + height1 > y) {
          
          if(index === 0) {
            setMapaAtual('MapaInicial')
            if(screenSize.width/2 > left) {
              setLeft(window.innerWidth - 80)
            } else {
              setLeft(10)
            }
          }
          if(index === 1) {
            setMapaAtual('SegundoMapa')
            setLeft(window.innerWidth - 80)
          }
          if(index === 2) {
            setMapaAtual('TerceiroMapa')
            setLeft(10)
            
          }
          if(index === 3) {
            setMapaAtual('QuartoMapa')
            setTop(100)
            setLeft(left)
            
          }
        }   
      })
    }

    function eventClick(event) {
      let tecla = event.key.toLowerCase();
        if (tecla === 'w' || tecla === 'arrowup') {
          if(colisaoParedes(top - 10, left, dimensoes, width1, height1)) return
          if(top > 0) setTop(top - 10);
        }
        if (tecla === 's' || tecla === 'arrowdown') {
          testeCaminhos(top + 10, left)  
          if(colisaoParedes(top + 10, left, dimensoes, width1, height1)) return
          if(top < screenSize.height - 120) setTop(top + 10);
        }
        if (tecla === 'a' || tecla === 'arrowleft') {       
          setTransform(1)
          testeCaminhos(top, left)
          if(colisaoParedes(top, left - 10, dimensoes, width1, height1)) return
          if(left > 0) setLeft(left - 10);
        }
        if (tecla === 'd' || tecla === 'arrowright') {
          setTransform(-1)
          testeCaminhos(top, left + 10)
          if(colisaoParedes(top, left + 10, dimensoes, width1, height1)) return
          if(left < screenSize.width - 80) setLeft(left + 10);
        }
    }

    window.addEventListener('keydown', eventClick);
    return () => window.removeEventListener('keydown', eventClick);
  }, [top, left, screenSize, height1, width1, props, dimensoes]); 
  return (
    <>
    {mapaAtual === 'MapaInicial' ? (
      <MapaInicial onUpdate={updateParentVariable}/>
    ) : mapaAtual === 'SegundoMapa' ?(
      <SegundoMapa onUpdate={updateParentVariable}/>
    ) : mapaAtual === 'TerceiroMapa' ? (
      <TerceiroMapa onUpdate={updateParentVariable} left={left} top={top} width1={width1} height1={height1}/>
    ) : mapaAtual === 'QuartoMapa' ? (
      <></>
    ) : (
      <></>
    )}
      
      <img 
        src='/ghost.webp' 
        width={70}
        alt="ghost"
        className="ghost-principal"
        id='ghost-principal'
        ref={ghost}
        style={{
          left: left,
          top: top,
          transform: `scaleX(${transform})`
        }}
      />
      
    </>
  )
}

function App() {
  return (
    <Ghost></Ghost>
  )
}

export default App;
