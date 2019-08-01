import {App, mapStateToProps} from './App';
import {shallow} from 'enzyme';
import React from 'react';
import {mockState} from '../../utils/mockData/mockData';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('MSTP', () => {
    it('should return an array of items', () => {
      const mappedProps=mapStateToProps(mockState);
      expect(mappedProps).toEqual(mockState)
    })
    });
})