export type Record = object

export type Transformer = (record: Record) => number

export enum Sort {
  asc = 'asc',
  desc = 'desc',
}

export enum Strategy {
  increasing = 'increasing',
  decreasing = 'decreasing',
}

export interface Criteria {
  key?: string
  strategy?: Strategy
  weight?: number
  min?: number
  max?: number
  distance?: number
  transform?: Transformer
}

export interface Config {
  sort?: Sort | null
}
