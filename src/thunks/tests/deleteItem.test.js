import {mockItem} from '../../utils/mockData/mockData';
import { deleteItem } from "../deleteItemThunk";
import { deleteItem, hasError } from '../../actions';


describe("deleteItem", () => {
  let mockURL, mockDispatch, thunk, mockId;

  beforeEach(() => {
    mockId = 3
    mockURL = `http://localhost:3001/api/v1/items/${mockId}`;
    mockDispatch = jest.fn();
    window.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () =>
          Promise.resolve({
            Item: mockItem
          })
      })
    );
    thunk = deleteItem(mockItem);
  });

  it("should dispatch deleteItem with correct params", async () => {
    await thunk(mockDispatch);
    expect(mockDispatch).toHaveBeenCalledWith(deleteItem(mockItem));
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