import { Node, NodeRaw, NodeState } from '../../types/nodes';

export const rebuildTree = (rawNodes: NodeRaw[]): NodeState => {
    const dict: Record<NodeRaw['id'], Node> = {};
    const rootNodes: Array<Node['id']> = [];

    rawNodes.forEach((rawNode) => {
        dict[rawNode.id] = { ...rawNode, selected: false };

        if (rawNode.parent !== undefined) {
            const parentNode = dict[rawNode.parent];
            
            const children = parentNode.children || [];
            children.push(rawNode.id);

            parentNode.children = children;
        } else {
            rootNodes.push(rawNode.id);
        }
    });
    return { rootNodes, nodes: dict };
};
