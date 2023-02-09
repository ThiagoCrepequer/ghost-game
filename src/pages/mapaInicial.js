import { useEffect, useState, useRef } from 'react';

export function MapaInicial(props) {
    const ref = useRef([null, null, null, null])
    const refCaminhos = useRef([null, null, null, null])
    const [dimensoes, setDimensoes] = useState([])
  
    const updateParent = () => {
      props.onUpdate(dimensoes)
    }
  
    useEffect(() => {
      updateParent()
    }, [dimensoes])
  
    useEffect(() => {
      const dimensoesArray = ref.current.map((r) => {
        if (r) {
          return {
            width: r.offsetWidth,
            height: r.offsetHeight,
            x: r.getBoundingClientRect().left,
            y: r.getBoundingClientRect().top
          }
        }
      })
      dimensoesArray.push(refCaminhos.current.map((r) => {
        if(r) {
          return {
            width: r.offsetWidth,
            height: r.offsetHeight,
            x: r.getBoundingClientRect().left,
            y: r.getBoundingClientRect().top
          }
        }
      }))
      dimensoesArray[6].pop()
      setDimensoes(dimensoesArray)
    }, [])
    
    return (
      <div>
        <input type='hidden' />
        <div
          className='objeto o0'
          ref={el => (ref.current[0] = el)}
        />
        <div
          className='objeto o1'
          ref={el => (ref.current[1] = el)}
        />
        <div
          className='objeto o2'
          ref={el => (ref.current[2] = el)}
        />
        <div
          className='objeto o3'
          ref={el => (ref.current[3] = el)}
        />
        <div
          className='objeto o4'
          ref={el => (ref.current[4] = el)}
        />
        <div
          className='objeto o5'
          ref={el => (ref.current[5] = el)}
        />
        <div
          className='caminhos c0'
          ref={el => (refCaminhos.current[0] = el)}
        />
        <div
          className='caminhos c1'
          ref={el => (refCaminhos.current[1] = el)}
        />
        <div
          className='caminhos c2'
          ref={el => (refCaminhos.current[2] = el)}
        />
      </div>
    )
  }