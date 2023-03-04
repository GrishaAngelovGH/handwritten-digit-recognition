import { render } from '@testing-library/react'

import DigitRecognition from './DigitRecognition'

test('should render DigitRecognition component', () => {
  const view = render(<DigitRecognition />)

  expect(view).toMatchSnapshot()
})