import * as actions from './index';
import { mockList, mockItem, mockLoading, mockError } from '../utils/mockData/mockData';

describe('actions', () => {

  describe('addList', () => {
    it('should have a type of ADD_LIST with a payload of a list object', () => {
      const expectedAction = {
        type: 'ADD_LIST',
        payload: {
          list: mockList
        }
      };
      const result = actions.addList(mockList);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('addItem', () => {
    it('should have a type of ADD_ITEM with a payload of an item object', () => {
      const expectedAction = {
        type: 'ADD_ITEM',
        payload: {
          item: mockItem
        }
      };
      const result = actions.addItem(mockItem);
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
    it('should have a type of DELETE_LIST with a payload of a list object', () => {
      const expectedAction = {
        type: 'DELETE_LIST',
        payload: {
          list: mockList
        }
      };
      const result = actions.deleteList(mockList);
      expect(result).toEqual(expectedAction);
    });
  });

  describe('deleteItem', () => {
    it('should have a type of DELETE_ITEM with a payload of an item object', () => {
      const expectedAction = {
        type: 'DELETE_ITEM',
        payload: {
          item: mockItem
        }
      };
      const result = actions.deleteList(mockItem);
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
      const result = actions.deleteList(mockError);
      expect(result).toEqual(expectedAction);
    });
  });

});