import App from './App';
import {shallow} from 'enzyme';
import React from 'react';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
})