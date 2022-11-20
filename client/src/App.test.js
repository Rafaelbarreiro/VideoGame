import { render, screen } from '@testing-library/react';
import App from './App';

//se agrega
import React from 'react';
import Create, {validate} from '../src/components/Create/Create.jsx'
import { shallow, mount } from 'enzyme';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
let wrapper;

export function createTestStore() {
  const wrapper = createStore(
    combineReducers({
      user: rootReducer,
      // config: configReducer,
    })
  );
  return wrapper;
}

describe ('<Create />', () =>{
  
  beforeEach(() => {
    wrapper = mount (<Create />);
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('El form deberia cambiar de estado cuando escriban en el input de name', () => {
    wrapper.find('input[name="name"]').simulate('change', {target: {name: 'name', value: 'NewUsr'}});
    const ele = wrapper.find('input[name="name"]');
    expect(ele.prop('value')).toEqual('NewUsr');
  });


}

)

/* 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}); */
