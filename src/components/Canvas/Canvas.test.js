import { render } from '@testing-library/react'

import Canvas from './Canvas'

test('should render component', () => {
  const container = render(<Canvas />)

  expect(container).toMatchSnapshot()
})