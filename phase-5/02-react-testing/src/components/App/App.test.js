import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import App from './App';

// HELPERS

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})


// APP RENDERS
test('renders the App component', () => {
  render(<App />, container)

  const app = document.querySelector('.App')

  expect(app).toBeTruthy()
})


// APP HAS THE EXPECTED TITLE TEXT
test('has title text', () => {
  render(<App />, container)

  const title = document.querySelector('h1')

  expect(title).toBeTruthy()
  expect(title.textContent.includes('React Testing')).toBeTruthy()
})




// APP CAN RESPOND TO A FETCH CALL
test('can respond to fetch calls', async () => {
  const cakeNumbers = [1,2,3,4,5,6]

  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(cakeNumbers)
    })
  );

  await act(async () => {
    render(<App />, container);
  });

  const lis = document.querySelectorAll('li')

  expect(lis).toBeTruthy()
  expect(lis.length > 0).toBeTruthy()

  expect(lis[0].textContent).toBe('1')
  expect(lis[5].textContent).toBe('6')
})
