export function colisaoParedes(top, left, dimensoes, width1, height1) {
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