import * as pt from "pareto-core-types"

export type TUntypedNode = {
    readonly "kindName": string
    readonly "value": string
    readonly "location": {
        line: number
        column: number
    }
    readonly "children": pt.Array<TUntypedNode>
}
