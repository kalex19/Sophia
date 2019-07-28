import { fetchData } from './fetchData';
import {mockList} from './mockData/mockData';

describe('fetchData', () => {
  let mockUrl;

  beforeEach(() => {
    mockUrl = 'www.caregiver.com';

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockList)
      });
    });
  });

  it('should call fetch with the correct params', () => {
    fetchData(mockUrl);

    expect(window.fetch).toHaveBeenCalledWith(mockUrl, undefined)
  });

  it('should return a parsed response if status is okay', async () => {
    let result = await fetchData(mockUrl);

    expect(result).toEqual(mockList);
  });

  it('should return an error if the fetch fails', async () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    await expect(fetchData()).rejects.toEqual(Error());
  });
});