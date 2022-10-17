import { shallow } from 'enzyme';
import UserSearch from './UserSearch';

const wrapper = shallow(<UserSearch />);

describe('tests in <UserSearch/> component', () => {
  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
