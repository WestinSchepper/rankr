export interface Record {
    [key: string]: any;
}
export declare type Transformer = (record: Record) => number;
export declare type CustomStrategy = (record: Record, criteria: Criteria) => number;
export declare enum Sort {
    asc = "asc",
    desc = "desc"
}
export declare enum Strategy {
    increasing = "increasing",
    decreasing = "decreasing"
}
export interface Criteria {
    key?: string | [string];
    strategy?: string | CustomStrategy;
    weight?: number;
    min?: number;
    max?: number;
    distance?: number;
    transform?: Transformer;
}
export interface Config {
    sort?: Sort | string | null;
}
export interface Score {
    score: number;
    record: Record;
}
