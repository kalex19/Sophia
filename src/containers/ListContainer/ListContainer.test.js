import {shallow} from 'enzyme';
import React from 'react';
import {ListContainer, mapStateToProps, mapDispatchToProps} from './ListContainer';
import {mockState, mockItems, mockLists} from '../../utils/mockData/mockData';

describe('ListContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ListContainer lists={mockLists} items={mockItems}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('CDM', () => {

  });

  describe('fetchItems', () => {

  });

  describe('fetchLists', () => {
    
  });

  describe('MSTP', () => {
  it('should return an array of items', () => {
    const mappedProps=mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState)
  })
  });

  describe('MDTP', () => {

  });
})