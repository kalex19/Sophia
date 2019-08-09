import React from 'react';
import {shallow} from 'enzyme';
import {List, mapDispatchToProps} from './List';
import {mockItems, mockList} from '../../utils/mockData/mockData';
import {deleteItem, deleteList, updateItem, updateList} from '../../actions';
import {deleteItemThunk} from '../../thunks/deleteItemThunk';
//import into thunk not list test


describe('List', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<List list={mockList} items={mockItems}/>)
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
	});

  describe('MDTP', () => {
    it('should call dispatch with a deleteItem action when deleteItemThunk is called', () => {
			const mockDispatch = jest.fn();
			const mockThunk = jest.fn()
			const actionToDispatch = deleteItem(1);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.deleteItemThunk(1);
			expect(mockDispatch).toHaveBeenCalledWith(mockThunk);//deleteItemThunk = jest.fn() vs actionToDispatch
			// or thunk iscalledwith id
			//might have to mock thunk
			//mock when call deleteItem, the thunk is called with the id

			//check if function is being invoked
			//import action
			//check if function is called with action creator
		});
		
    it('should call dispatch with a deleteList action when deleteListThunk is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = deleteList(2);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.deleteList(2);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
		
    it('should call dispatch with a updateItem action when updateItemThunk is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = updateItem(3);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.updateItem(3);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
		
    it('should call dispatch with a updateList action when updateListThunk is called', () => {
			const mockDispatch = jest.fn();
			const actionToDispatch = updateList(4);
			const mappedProps = mapDispatchToProps(mockDispatch);
			mappedProps.updateList(4);
			expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
		});
  })
})