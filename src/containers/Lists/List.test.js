import React from 'react';
import {shallow} from 'enzyme';
import {List, mapDispatchToProps} from './List';

describe('List', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  describe('MDTP', () => {
    it('should call dispatch with a deleteItem action when deleteItemThunk is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = deleteItemThunk(1);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.deleteItem(1);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should call dispatch with a deleteList action when deleteListThunk is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = deleteListThunk(2);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.deleteListThunk(2);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should call dispatch with a updateItem action when updateItemThunk is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = updateItem(3);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.updateItemThunk(3);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
    it('should call dispatch with a updateList action when updateListThunk is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = updateList(4);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.updateListThunk(4);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
  })
})