import React from 'react';
import {Form, mapStateToProps, mapDispatchToProps} from './Form';
import {shallow} from 'enzyme';
import {mockLists, mockList, mockItem, mockItems} from '../../utils/mockData/mockData';
import * as actions from "../../actions";

describe('Form', () => {
  let wrapper, mockAddItem, mockAddList;

  beforeEach(() => {
    mockAddItem = jest.fn()
    mockAddList = jest.fn()
    wrapper = shallow(<Form items={mockItems} lists={mockLists} addItem={mockAddItem} addList={mockAddList}/> )
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
  describe('handleSubmit', () => {
    it('should call createList if a list is not selected', () => {
      jest.spyOn(wrapper.instance(), 'createList');
      jest.spyOn(wrapper.instance(), 'createItem');
      wrapper.instance().handleSubmit({
        preventDefault: () => {}
      })
      expect(wrapper.instance().createList).toHaveBeenCalled()
      expect(wrapper.instance().createItem).not.toHaveBeenCalled()
    });
    it('should call createItem if a list is selected', () => {
      wrapper.setState({selectedList: 1});
      jest.spyOn(wrapper.instance(), 'createList');
      jest.spyOn(wrapper.instance(), 'createItem');
      wrapper.instance().handleSubmit({
        preventDefault: () => {}
      })
      expect(wrapper.instance().createList).not.toHaveBeenCalled()
      expect(wrapper.instance().createItem).toHaveBeenCalled()
    })
    it('should clear state', () => {
      wrapper.setState({title: 'Grocery', task: 'Buy bread'});
      wrapper.instance().handleSubmit({
        preventDefault: () => {}
      })
      expect(wrapper.state('title')).toEqual('');
      expect(wrapper.state('task')).toEqual('');
    });
  })

describe('createList', () => {
	beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockLists)
      })
    );
  });
  it.skip('should call the fetch with the correct arguments', async () => {
    const mockUrl = "http://localhost:3002/api/v1/lists"
    await wrapper.instance().createList();
    expect(window.fetch).toHaveBeenCalledWith(mockUrl);
  });
  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.rejects({
      ok: false
    }))
    await expect(wrapper.instance().createList()).rejects.toEqual(Error("There is an error"));
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
    const mockOptions = {method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      list_id: parseInt(4),
      task: '',
      })}

    await wrapper.instance().createItem(4);
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, mockOptions);
  });

  it('should throw an error if fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.reject({
      ok: false
    }))
    await expect(wrapper.instance().createItem()).rejects.toEqual(Error("There is an error"));
  });
});

describe('handleChange', () => {
  it('should set state', () => {
    wrapper.setState({target: {title: 'Grocery', task: 'Buy bread'}});
    wrapper.instance().handleChange()
    expect(wrapper.state('title')).toEqual('Grocery');
    expect(wrapper.state('task')).toEqual('Buy Bread');
  });
})

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
    const actionToDispatch = actions.addItem(mockItem);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addItem(mockItem);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
  it('should call dispatch with a addList action when addLists is called', () => {
    const mockDispatch = jest.fn();
    const actionToDispatch = actions.addList(mockList);
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.addList(mockList);
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
  });
});

})