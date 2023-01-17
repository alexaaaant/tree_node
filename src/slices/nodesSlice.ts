import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Node, NodeState } from '../types/nodes';

const initialState: NodeState = {
  rootNodes: [],
  nodes: {},
};

const nodesSlice = createSlice({
  name: 'nodes',
  initialState,
  reducers: {
    nodesAdded(state: NodeState, action: PayloadAction<Omit<NodeState, 'selected'>>) {
      const nodesData = action.payload;

      state.rootNodes = nodesData.rootNodes;
      state.nodes = nodesData.nodes;
    },
    nodeSelected(state: NodeState, action: PayloadAction<Node['id']>) {
      const nodeId = action.payload;
      const node = state.nodes[nodeId];
      node.selected = !node.selected;
    },
    groupSelected(state: NodeState, action: PayloadAction<Node['id']>) {
      const parentNodeId = action.payload;
      const node = state.nodes[parentNodeId];

      node.selected = true;
      if (node.children) {
        node.children.forEach((id) => {
          const child = state.nodes[id];
          child.selected = true;
        });
      }
    },
  },
});

export const { nodesAdded, nodeSelected, groupSelected } = nodesSlice.actions;
export default nodesSlice.reducer;
