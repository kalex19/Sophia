import { addItem } from '../fetchItemThunk';
import { hasError, addAllLists } from '../../actions';
import {mockLists} from '../../utils/mockData/mockData';

describe('addItem', () => {

  let mockUrl, mockDispatch, thunk;

  beforeEach(() => {
    mockUrl = 'www.caregiver.com';
    mockDispatch = jest.fn();

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          item: mockItem
        })
      });
    });
    thunk = addItem(mockUrl)
  });
  
  it('should be called with the correct params', async () => {
    await thunk(mockDispatch);
    
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  })

  it('should dispatch addItem', () => {
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addItem(mockItem));
  });

  it('should dispatch hasError in case of error', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        statusText: 'There is an error'
      })
    })
    await thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(hasError('There is an error'))
  })
})