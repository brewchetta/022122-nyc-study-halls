import { render, act } from '@testing-library/react';
import { unmountComponentAtNode } from 'react-dom'
import Numbers from './Numbers';

// HELPERS

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
  // here I just want to show that if your renders are consistent across tests you can add them to the beforeEach
  // (I mean here we only have one test so it feels kinda moot no matter where we place the render)
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
