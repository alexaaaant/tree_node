import { NodeComponent } from './Node';
import { useEffect } from 'react';
import { rebuildTree } from '../common/helpers/nodesParser';
import rawNodes from '../nodes';
import { useDispatch } from '../common/hooks/useDispatch';
import { nodesAdded } from '../slices/nodesSlice';
import { useSelector } from '../common/hooks/useSelector';
import '../styles/nodes.css';

export const NodesContainer = () => {
  const dispatch = useDispatch();
  const rootNodes = useSelector((state) => state.nodes.rootNodes);

  useEffect(() => {
    const nodesData = rebuildTree(rawNodes);
    dispatch(nodesAdded(nodesData));
  },        []);

  return (
    <div className="nodes_container">
      {rootNodes.map((nodeId) => (
        <NodeComponent key={nodeId} nodeId={nodeId} />
      ))}
    </div>
  );
};
