export interface NodeRaw {
  id: number;
  parent?: number;
  name: string;
}

export interface Node extends NodeRaw {
  children?: Array<NodeRaw['id']>;
  selected?: boolean;
}

export interface NodeState {
  rootNodes: Array<Node['id']>;
  nodes: Record<Node['id'], Node>;
}
