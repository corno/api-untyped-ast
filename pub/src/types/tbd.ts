import * as pt from "pareto-core-types"

export type TLocation = {
    readonly "line": number
    readonly "column": number
}

export type TUntypedNode = {
    readonly "kindName": string
    readonly "value": string
    readonly "details": {
        readonly "location": TLocation
    }
    readonly "children": pt.Array<TUntypedNode>
}
