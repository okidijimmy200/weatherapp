import { render } from '@testing-library/react';
jest.mock('../features/search/apis')
import ButtonContainer from '../container/buttonContainer';
import userEvent from '@testing-library/user-event';

// mock localStorage
const localStorageMock = (function () {
    let store = {};
  
    return {
      getItem(key) {
        return store[key];
      },
  
      setItem(key, value) {
        store[key] = value;
      },
  
      clear() {
        store = {};
      },
  
      removeItem(key) {
        delete store[key];
      },
  
      getAll() {
        return store;
      },
    };
  })();
  
  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  const setLocalStorage = (id, data) => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };

 describe('ButtonContainer', () => {
    it('should contain prev search text', async () => {
        const mockId = "data";
        const mockJson = [{name: 'kampala', country: 'uganda'}, {name: 'nairobi', country: 'kenya'}];
        setLocalStorage(mockId, mockJson);
        const prevSearch = jest.fn()
        // expect(localStorage.getItem(mockId)).toEqual(JSON.stringify(mockJson));
        const {getByText, getByRole} = render(<
            ButtonContainer prevSearch={prevSearch}/>)
        expect(getByText('Previous search results')).toBeInTheDocument()
        expect(getByRole('button', {name: 'kampala, uganda'})).toBeInTheDocument()

        await userEvent.click(getByRole('button', {name: 'kampala, uganda'}))
        expect(prevSearch).toHaveBeenCalled()
        
        
    })
 })
