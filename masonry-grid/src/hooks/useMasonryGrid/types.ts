import { RefObject } from "react"

export type TBreakpoints = {
    small: number;
    medium: number;
}

export type TSettings = {
    columns: number;
    minWidth: number;
}

export type TUseMasonryGrid = [columnCount: number]
