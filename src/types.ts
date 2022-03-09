export interface Record {
  [key: string]: any
}

export type Transformer = (record: Record, criteria?: Criteria) => number

export type CustomStrategy = (record: Record, criteria: Criteria) => number

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
  strategy?: string | CustomStrategy
  weight?: number
  min?: number
  max?: number
  distance?: number
  transform?: Transformer
}

export interface Config {
  sort?: Sort | string | null
}

export interface Score {
  score: number
  record: Record
}
