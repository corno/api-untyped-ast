import * as pt from "pareto-core-types"

export type TUntypedNode<NodeImplementationDetails> = {
    readonly "kindName": string
    readonly "value": string
    readonly "implementationDetails": NodeImplementationDetails
    readonly "children": pt.Array<TUntypedNode<NodeImplementationDetails>>
}

export type File<NodeImplementationDetails>  = {
    fullPath: string
    root: TUntypedNode<NodeImplementationDetails>
}

export type Project<NodeImplementationDetails> = {
    files: pt.Dictionary<File<NodeImplementationDetails>>
}

export type Location = {
    line: number
    column: number
}

export type GetLocation<NodeImplementationDetails> = (
    $: NodeImplementationDetails
) => Location
