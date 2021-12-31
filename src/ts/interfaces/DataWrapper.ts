import type { DataContainer } from "./DataContainer";

export interface DataWrapper {
	code: number
	status: string
	copyright: string
	data: DataContainer
}
