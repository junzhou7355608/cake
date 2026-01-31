import mitt from 'mitt';

interface Events {
  [key: string]: unknown;
  [key: symbol]: unknown;
}

export const emitter = mitt<Events>();
