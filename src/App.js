import { useEffect, useState, useRef } from 'react';
import './App.css';
import { MapaInicial } from './pages/mapaInicial.js'
import { SegundoMapa } from './pages/segundoMapa.js'

function Ghost(props) {
  const [left, setLeft] = useState('50%')
  const [top, setTop] = useState('7vh')
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
      dimensoes[6].map((element, index) => {
        let {height, width, x, y} = element
        
        if(
          left < x + width &&
          left + width1 > x &&
          top < y + height &&
          top + height1 > y
        ) {
          console.log(index)
          if(index === 0) {
            setMapaAtual('SegundoMapa')
            setLeft(screenSize.width - 80)
          }
        }
        
      })
    }

    function testeParede(top, left) {
      let testeColisao = dimensoes.map(element => {
        let {height, width, x, y} = element

        return (
          left < x + width &&
          left + width1 > x &&
          top < y + height &&
          top + height1 > y
        );
      })

      if(testeColisao.some(element => element === true)) return true
    }

    function eventClick(event) {
      let tecla = event.key.toLowerCase();
        if (tecla === 'w' || tecla === 'arrowup') {
          if(testeParede(top - 10, left)) return
          if(top > 0) setTop(top - 10);
        }
        if (tecla === 's' || tecla === 'arrowdown') {   
          if(testeParede(top + 10, left)) return
          if(top < screenSize.height - 120) setTop(top + 10);
        }
        if (tecla === 'a' || tecla === 'arrowleft') {
          testeCaminhos(top - 10, left)
          setTransform(1)
          if(testeParede(top, left - 10)) return
          if(left > 0) setLeft(left - 10);
        }
        if (tecla === 'd' || tecla === 'arrowright') {
          setTransform(-1)
          if(testeParede(top, left + 10)) return
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
      <SegundoMapa />
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
