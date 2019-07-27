import * as actions from './index';
import { mockLists, mockList, mockItems, mockItem, mockLoading, mockError } from '../utils/mockData/mockData';

describe('actions', () => {

  describe('addAllLists', () => {
    it('should have a type of ADD_ALL_LISTS with a payload of a list array', () => {
      const expectedAction = {
        type: 'ADD_ALL_LISTS',
        payload: {
          lists: mockLists
        }
      };
      const result = actions.addAllLists(mockLists);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('addAllItems', () => {
    it('should have a type of ADD_ALL_ITEMS with a payload of an item array', () => {
      const expectedAction = {
        type: 'ADD_ALL_ITEMS',
        payload: {
          items: mockItems
        }
      };
      const result = actions.addAllItems(mockItems);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('updateList', () => {
    it('should have a type of UPDATE_LIST with a payload of a list object', () => {
      const expectedAction = {
        type: 'UPDATE_LIST',
        payload: {
          list: mockList
        }
      };
      const result = actions.updateList(mockList);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('updateItem', () => {
    it('should have a type of UPDATE_ITEM with a payload of an item object', () => {
      const expectedAction = {
        type: 'UPDATE_ITEM',
        payload: {
          item: mockItem
        }
      };
      const result = actions.updateItem(mockItem);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('deleteList', () => {
    it('should have a type of DELETE_LIST with a payload of an id', () => {
      const expectedAction = {
        type: 'DELETE_LIST',
        payload: {
          id: 1
        }
      };
      const result = actions.deleteList(1);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('deleteItem', () => {
    it('should have a type of DELETE_ITEM with a payload of an id', () => {
      const expectedAction = {
        type: 'DELETE_ITEM',
        payload: {
          id: 1
        }
      };
      const result = actions.deleteItem(1);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('isLoading', () => {
    it('should have a type of IS_LOADING with a payload of a boolean', () => {
      const expectedAction = {
        type: 'IS_LOADING',
        payload: {
          loading: false
        }
      };
      const result = actions.isLoading(mockLoading);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('hasError', () => {
    it('should have a type of HAS_ERROR with a payload of a string', () => {
      const expectedAction = {
        type: 'HAS_ERROR',
        payload: {
          error: 'There is an error'
        }
      };
      const result = actions.hasError(mockError);
      expect(result).toEqual(expectedAction);
    });
  });

});