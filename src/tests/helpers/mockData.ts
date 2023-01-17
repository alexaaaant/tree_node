import { NodeRaw, NodeState } from '../../types/nodes';

export const nodesWithParentsRaw: NodeRaw[] = [{ name: '1', id: 0, parent: 0 }, { name: '2', id: 1, parent: 0 }];
export const nodesWithParents: NodeState = {
    rootNodes: [],
    nodes: {
        '0': { 'children': [0, 1], 'id': 0, 'name': '1', 'parent': 0, 'selected': false },
        '1': { 'id': 1, 'name': '2', 'parent': 0, 'selected': false }
    }
};

export const nodesRaw: NodeRaw[] = [{ name: '0', id: 0 }, { name: '1', id: 1 }, { name: '2', id: 2, parent: 0 }, { name: '3', id: 3, parent: 2 }];
export const nodes: NodeState = {
    nodes: {
        '0': { 'children': [2], 'id': 0, 'name': '0', 'selected': false },
        '1': { 'id': 1, 'name': '1', 'selected': false },
        '2': { 'children': [3], 'id': 2, 'name': '2', 'parent': 0, 'selected': false },
        '3': { 'id': 3, 'name': '3', 'parent': 2, 'selected': false }
    },
    rootNodes: [0, 1]
};

export const nodesEmpty: NodeState = {
    nodes: {},
    rootNodes: [],
};
