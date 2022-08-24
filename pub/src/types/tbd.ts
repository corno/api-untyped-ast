import * as pt from "pareto-core-types"

export type TUntypedNode<NodeImplementationDetails> = {
    readonly "kindName": string
    readonly "value": string
    readonly "implementationDetails": NodeImplementationDetails
    readonly "children": pt.Array<TUntypedNode<NodeImplementationDetails>>
}
