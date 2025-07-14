import mitt from 'mitt'

interface Events {
  [key: string]: unknown
  [key: symbol]: unknown
}

const emitter = mitt<Events>()

export default emitter
