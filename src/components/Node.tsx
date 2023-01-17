import { FC, memo } from 'react';
import { useDispatch } from '../common/hooks/useDispatch';
import { useSelector } from '../common/hooks/useSelector';
import { groupSelected, nodeSelected } from '../slices/nodesSlice';
import { Node } from '../types/nodes';

interface NodeProps {
  nodeId: Node['id'];
}

export const NodeComponent: FC<NodeProps> = memo(({ nodeId }) => {
    const node = useSelector((state) => state.nodes.nodes[nodeId], 
                             (prevNode, newNode) => prevNode.selected === newNode.selected);
    const dispatch = useDispatch();

    const selectNode = () => {
      dispatch(nodeSelected(nodeId));
    };

    const selectGroup = (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault(); 
      dispatch(groupSelected(nodeId));
    };

    return (
      <div className="node">
        <div
          className={`node__name ${node.selected ? 'node__name_selected' : ''}`}
          onClick={selectNode}
          onContextMenu={selectGroup}
        >
          {node.name}
        </div>
        {node.children ? (
          <div className="node_children">
            {node.children.map((childId) => (
              <NodeComponent key={childId} nodeId={childId} />
            ))}
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  });

NodeComponent.displayName = 'NodeComponent';
