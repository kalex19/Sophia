import {shallow} from 'enzyme';
import React from 'react';
import {ListContainer, mapStateToProps, mapDispatchToProps} from './ListContainer';
import {mockState, mockItems, mockLists} from '../../utils/mockData/mockData';
import * as action from '../../actions';

describe('ListContainer', () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<ListContainer lists={mockLists} items={mockItems}/>)
    instance = wrapper.instance();
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('CDM', () => {
    it('should invoke fetchItems', () => {
			jest.spyOn(instance, 'fetchItems');
			instance.componentDidMount();
			expect(instance.fetchItems).toHaveBeenCalled();
		});
		it('should invoke fetchLists', () => {
      jest.spyOn(instance, 'fetchLists');
			instance.componentDidMount();
			expect(instance.fetchLists).toHaveBeenCalled();
		});

  });

  describe('MSTP', () => {
  it('should return an array of items', () => {
    const mappedProps=mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState)
  })
  });

  describe('MDTP', () => {
    it('should call dispatch with a addAllItems action when daddAllitems is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = action.addAllItems(mockItems);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.addAllItems(mockItems);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a addAllLists action when addAllLists is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = action.addAllLists(mockLists);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.addAllLists(mockLists);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('should call dispatch with a hasError action when hasError is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = action.hasError('There is an error');
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.hasError('There is an error');
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
  });
})