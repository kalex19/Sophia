import {updateListThunk} from '../updateListThunk';
import { hasError, updateList } from '../../actions';
import {mockList} from '../../utils/mockData/mockData';

describe('updateList', () => {

  let mockUrl, mockDispatch, thunk;

  beforeEach(() => {
    mockUrl = 'www.caregiver.com';
    mockDispatch = jest.fn();
    thunk = updateListThunk(mockUrl)

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          list: mockList
        })
      });
    });
  });
  
  it('should be called with the correct params', async () => {
    await thunk(mockDispatch);
    
    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined);
  })

  it('should dispatch updateList', () => {
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(updateList(mockList));
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