import { shallow } from 'enzyme';
import RepositoriesSearch from './RepositoriesSearch';

const wrapper = shallow(<RepositoriesSearch />);
const onSearchRepo = jest.fn();

describe('tests in <RepositorySearch/> component', () => {
  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
