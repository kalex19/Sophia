import {mockList} from '../../utils/mockData/mockData';
import { deleteListThunk } from "../deleteListThunk";
import { deleteList, hasError } from '../../actions';


describe("deleteList", () => {
  let mockURL, mockDispatch, thunk, mockId;

  beforeEach(() => {
    mockId = 3
    mockURL = `http://localhost:3001/api/v1/lists/${mockId}`;
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            list: mockList
          })
      })
    );
    thunk = deleteListThunk(mockList);
  });

  it("should dispatch deleteList with correct params", async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(deleteList(mockList));
  });
  it('should dispatch hasError with a message if response is not ok', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve ({
      ok: false,
      statusText: 'There is an error'
    }))
    await thunk(mockDispatch)
    expect(mockDispatch).toHaveBeenCalledWith(hasError('There is an error'))
  });
});