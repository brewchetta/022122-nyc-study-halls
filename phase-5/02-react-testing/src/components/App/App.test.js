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
test('renders App', () => {
  act(() => {
    render(<App />, container)
  })

  const appDiv = document.querySelector('.App')

  expect(appDiv).toBeTruthy();
});



// APP HAS THE EXPECTED TITLE TEXT
test('renders the title ("React Testing!!!") inside App', () => {
  render(<App />, container)

  const appTitle = document.querySelector('.App h1')

  expect(appTitle.textContent).toBe('React Testing!!!');
});



// APP CAN RESPOND TO A FETCH CALL
test('fetches data when the component mounts', async () => {
  const data = [1,2,3]

  jest.spyOn(global, 'fetch').mockImplementation(() => {
    return Promise.resolve({
      json: () => Promise.resolve(data)
    })
  })

  await act(async () => {
    render(<App />, container)
  })

  expect(document.querySelector('p').textContent).toBe("1")

  global.fetch.mockRestore()
})
