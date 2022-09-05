import * as pt from "pareto-core-types"

export type TLocation = {
    readonly "line": number
    readonly "column": number
}

export type TDetails = {
    readonly "location": TLocation
}

export type TUntypedNode = {
    readonly "kindName": string
    readonly "value": string
    readonly "details": TDetails
    readonly "children": pt.Array<TUntypedNode>
}
