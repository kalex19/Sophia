import { fetchLists } from '../fetchListsThunk';
import { hasError, addAllLists } from '../../actions';
import {mockLists} from '../../utils/mockData/mockData';

describe('fetchLists', () => {

  let mockUrl, mockDispatch, thunk;

  beforeEach(() => {
    mockUrl = 'www.caregiver.com';
    mockDispatch = jest.fn();

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          lists: mockLists
        })
      });
    });
    thunk = fetchLists(mockUrl)
  });
  
  it('should be called with the correct params', async () => {
    await thunk(mockDispatch);
    
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  })

  it('should dispatch addAllLists', () => {
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(addAllLists(mockLists));
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