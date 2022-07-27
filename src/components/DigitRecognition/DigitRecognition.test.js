import { render } from '@testing-library/react'

import DigitRecognition from './DigitRecognition'

test('should render component', () => {
  const container = render(<DigitRecognition />)

  expect(container).toMatchSnapshot()
})