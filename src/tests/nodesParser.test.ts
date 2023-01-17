import { rebuildTree } from '../common/helpers/nodesParser';
import { nodes, nodesEmpty, nodesRaw, nodesWithParents, nodesWithParentsRaw } from './helpers/mockData';

describe('rebuildTree', () => {
    it('should return an empty rootNodes prop, if all nodes has parent', () => {
        const nodesData = rebuildTree(nodesWithParentsRaw);

        expect(nodesData.rootNodes).toHaveLength(0);
        expect(nodesData).toStrictEqual(nodesWithParents);
    });

    it('should return a valid nodes data', () => {
        const nodesData = rebuildTree(nodesRaw);

        expect(nodesData).toStrictEqual(nodes);
    });

    it('should do nothing, if raw nodes is empty', () => {
        const nodesData = rebuildTree([]);

        expect(nodesData).toStrictEqual(nodesEmpty);
    });
});