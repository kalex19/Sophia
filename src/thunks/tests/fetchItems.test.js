import { fetchItems} from '../fetchListsThunk';
import { hasError, addAllItems} from '../../actions';
import {mockItems} from '../../utils/mockData/mockData';

describe('fetchItems', () => {

  let mockUrl, mockDispatch, thunk;

  beforeEach(() => {
    mockUrl = 'www.caregiver.com';
    mockDispatch = jest.fn();

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          items: mockItems
        })
      });
    });
    thunk = fetchItems(mockUrl)
  });
  
  it('should be called with the correct params', async () => {
    await thunk(mockDispatch);
    
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  })

  it('should dispatch addAllItems', () => {
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addAllItems(mockItems));
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