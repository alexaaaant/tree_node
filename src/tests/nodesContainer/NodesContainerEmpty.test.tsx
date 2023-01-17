import { NodesContainer } from '../../components/Nodes';
import { render } from '../helpers/test-utils';

jest.mock('../../nodes', () => ({
    __esModule: true,
    default: [],
}));

describe('NodesContainer', () => {
    it('should render an empty tree, if nodesData is empty', () => {
      const { container } = render(<NodesContainer />);
      expect(container).toMatchSnapshot();
    });
});
