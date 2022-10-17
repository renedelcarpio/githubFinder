import { shallow } from 'enzyme';
import Form from './Form';

const wrapper = shallow(<Form />);

describe('Test in <Form/> component', () => {
  test('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('should have the correct title', () => {
    const title = wrapper.find('.neon__title');
    expect(title.text()).toEqual('Github Search');
  });

  test('should have an imput', () => {
    const input = wrapper.find('input');
    expect(input.length).toBe(1);
  });

  test('should have a submit button', () => {
    const button = wrapper.find('button');
    expect(button.length).toBe(1);
  });
});
