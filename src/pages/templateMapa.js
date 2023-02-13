
export function templateMapa(ref, refCaminhos) {
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
        return dimensoesArray
}