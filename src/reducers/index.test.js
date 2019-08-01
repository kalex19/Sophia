import {itemReducer} from './itemReducer';
import {listReducer} from './listReducer';
import {loadingReducer} from './loadingReducer';
import {errorReducer} from './errorReducer';
import * as action from '../actions';
import {mockLists, mockList, mockItems, mockItem} from '../utils/mockData/mockData';

describe('reducers', () => {

  describe('itemReducer', () => {
    it('should return initial state', () => {
      const expected = [];
			const result = itemReducer(undefined, {});
			expect(result).toEqual(expected);
    });
    it('should handle ADD_ALL_ITEMS', () => {
        const expected = mockItems;const action = {
          type: 'ADD_ALL_ITEMS',
          payload: {
            items: mockItems
          }
        }
        const result = itemReducer([], action);
        expect(result).toEqual(expected);
    });
    it('should handle ADD_ITEM', () => {
      const expected = mockItem;
      const action = {
        type: "ADD_LIST",
        payload: {
          list: mockList
        }
      }
      const result = itemReducer(mockItem, action);
      expect(result).toEqual(expected);
  });
    it('should handle UPDATE_ITEM', () => {
      const expected = mockItems;
      const action = {
        type: "UPDATE_ITEM",
        payload: {
          item: mockItem
        }
      }
        const result = itemReducer(mockItems, action);
        expect(result).toEqual(expected);
    });
    it('should handle DELETE_ITEM', () => {
      const expected = mockItems;
      const action = {
        type: "DELETE_ITEM",
        payload: {
          id: 1
        }
      }
        const result = itemReducer(mockItems, action);
        expect(result).toEqual(expected);
    });
  });
  describe('listReducer', () => {
    it('should return initial state', () => {
      const expected = [];
			const result = listReducer(undefined, {});
			expect(result).toEqual(expected);
    });
    it('should handle ADD_ALL_LISTS', () => {
      const expected = mockLists;
      const action = {
        type: "ADD_ALL_LISTS",
        payload: {
          lists: mockLists
        }
      }
			const result = listReducer([], action);
			expect(result).toEqual(expected);
    });
    it('should handle ADD_LIST', () => {
      const expected = mockList;
      const action = {
        type: "ADD_LIST",
        payload: {
          list: mockList
        }
      }
			const result = listReducer(...mockLists, action);
			expect(result).toEqual(expected);
    });
    it('should handle UPDATE_LIST', () => {
      const expected = mockLists;
      const action = {
        type: "UPDATE_LIST",
        payload: {
          list: mockList
        }
      }
			const result = listReducer(mockLists, action);
			expect(result).toEqual(expected);
    });
    it('should handle DELETE_LIST', () => {
      const expected = mockLists;
      const action = {
        type: "DELETE_LIST",
        payload: {
          id: 1
        }
      }
			const result = listReducer(mockLists, action);
			expect(result).toEqual(expected);
    });
  });
  describe('loadingReducer', () => {
    it('should return initial state', () => {
      const expected = false;
			const result = loadingReducer(undefined, {});
			expect(result).toEqual(expected);
    });
    it('should handle IS_LOADING', () => {
      const expected = false;
			const result = loadingReducer(false, action.isLoading(true));
			expect(result).toEqual(expected);
    });
  });

  describe('errorReducer', () => {
    it('should return initial state', () => {
      const expected = '';
			const result = errorReducer(undefined, {});
			expect(result).toEqual(expected);
    });
    it('should handle HAS_ERROR', () => {
      const expected = 'There is an error';
			const result = errorReducer(undefined, action.hasError('There is an error'));
			expect(result).toEqual(expected);
    });
  });
});
