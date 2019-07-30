import React from 'react';
import {Form, mapStateToProps, mapDispatchToProps} from './Form';
import {shallow} from 'enzyme';
import {mockLists, mockList, mockItem} from '../../utils/mockData/mockData';
import * as actions from "../../actions";

describe('Form', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Form/> )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

describe('createList', () => {
	beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLists)
      })
    );
  });
  it('should call the fetch with the correct arguments', async () => {
    const mockUrl = "http://localhost:3002/api/v1/lists"
    await Form.createList();
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });
  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(Form.cleanList()).rejects.toEqual(Error("There is an error"));
  });
});

describe('createItem', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockItems)
      })
    );
  });
  it('should call the fetch with the correct arguments', async () => {
    const mockUrl = 'http://localhost:3002/api/v1/items'
    await Form.createItem(4);
    expect(window.fetch).toHaveBeenCalledWith(4);
  });
  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }))
    await expect(Form.createItem()).rejects.toEqual(Error("There is an error"));
  });
});

describe('MSTP', () => {
  it('should return an array of lists', () => {
    const mockState = {
      lists: mockLists
    };
    const mappedProps = mapStateToProps(mockState);
    expect(mappedProps).toEqual(mockState);
  });
});

describe('MDTP', () => {
  it('should call dispatch with a addItem action when addItems is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addItem(mockItem);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getMovies(mockItem);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it('should call dispatch with a addList action when addLists is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = addList(mockList);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.getMovies(mockList);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

})