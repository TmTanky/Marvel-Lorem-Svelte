import type { Character } from "./Character";

export interface DataContainer {
    limit: number
    total: number
    count: string
    results: Character[]
}