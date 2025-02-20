import { render } from '@testing-library/react'

import Canvas from './Canvas'

test('should render Canvas component', () => {
  const view = render(<Canvas />)

  expect(view).toMatchSnapshot()
})