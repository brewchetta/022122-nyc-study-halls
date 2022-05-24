import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import Numbers from './Numbers';

// HELPERS

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  render(<Numbers items={[1,2,3]} />, container)
})

afterEach(() => {
  unmountComponentAtNode(container)
  container.remove()
  container = null
})


// NUMBER CONTAINER RENDERS
test('renders Numbers', () => {
  const numbersDiv = document.querySelector('div')

  expect(numbersDiv).toBeTruthy();
});



// RENDERS AN EXPECTED ARRAY OF NUMBERS FROM PROPS
