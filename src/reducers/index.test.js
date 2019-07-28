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
        const expected = mockItems;
        const result = itemReducer(mockItems,{
          type: "ADD_ALL_ITEMS",
          payload: {
            items:mockItems
          }
        });
        expect(result).toEqual(expected);
    });
    it('should handle ADD_ITEM', () => {
      const expected = mockItem;
      const result = itemReducer(mockItem,{
        type: "ADD_ITEM",
        payload: {
          item:mockItem
        }
      });
      expect(result).toEqual(expected);
  });
    it('should handle UPDATE_ITEM', () => {
      const expected = mockItem;
        const result = itemReducer(mockItem,{
          type: "UPDATE_ITEM",
          payload: {
            item: mockItem
          }
        });
        expect(result).toEqual(expected);
    });
    it('should handle DELETE_ITEM', () => {
      const expected = mockItem;
        const result = itemReducer(mockItem,{
          type: "DELETE_ITEM",
          payload: {
            id: 1
          }
        });
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
			const result = listReducer(mockLists, {
        type: "ADD_ALL_LISTS",
        payload: {
          lists:mockLists
        }
      });
			expect(result).toEqual(expected);
    });
    it('should handle ADD_LIST', () => {
      const expected = mockList;
			const result = listReducer(mockList, {
        type: "ADD_LIST",
        payload: {
          list:mockList
        }
      });
			expect(result).toEqual(expected);
    });
    it('should handle UPDATE_LIST', () => {
      const expected = mockList;
			const result = listReducer(mockList,{
        type: "UPDATE_LIST",
        payload: {
          list:mockList
        }
      });
			expect(result).toEqual(expected);
    });
    it('should handle DELETE_LIST', () => {
      const expected = mockList;
			const result = listReducer(mockList,{
        type: "DELETE_LIST",
        payload: {
          id: 1
        }
      });
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
