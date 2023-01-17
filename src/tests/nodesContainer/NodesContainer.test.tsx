import { NodesContainer } from '../../components/Nodes';
import { NodeRaw } from '../../types/nodes';
import { fireEvent, render, screen } from '../helpers/test-utils';

jest.mock('../../nodes', () => ({
  __esModule: true,
  default: [
    { id: 0, name: '0' },
    { id: 1, name: '1' },
    { id: 2, name: '2', parent: 0 },
    { id: 3, name: '3', parent: 0 },
    { id: 4, name: '4', parent: 1 },
    { id: 5, name: '5', parent: 3 },
  ] as NodeRaw[],
}));

describe('NodesContainer', () => {
  it('should render a full tree, if a nodesData exists', () => {
    const { container } = render(<NodesContainer />);
    expect(container).toMatchSnapshot();
  });

  it('should select one node, if user clicks on node name', () => {
    const { container } = render(<NodesContainer />);

    const nodeElement = screen.getByText('3');
    expect(nodeElement).not.toHaveClass('node__name_selected');

    fireEvent.click(nodeElement);
    expect(nodeElement).toHaveClass('node__name_selected');

    // eslint-disable-next-line testing-library/no-container
    const selectedElements = container.querySelectorAll('.node__name_selected');
    expect(selectedElements).toHaveLength(1);
  });

  it('should select all group, if user click by right button on node name', () => {
    const { container } = render(<NodesContainer />);

    const nodeElement = screen.getByText('0');
    
    fireEvent.contextMenu(nodeElement);
    expect(nodeElement).toHaveClass('node__name_selected');

    // eslint-disable-next-line testing-library/no-container
    const selectedElements = container.querySelectorAll('.node__name_selected');
    expect(selectedElements).toHaveLength(3);

    expect(container).toMatchSnapshot();
  });
});
