import { render } from '@testing-library/react'

import BarChart from './BarChart'

test('should render component', () => {
  const container = render(<BarChart />)

  expect(container).toMatchSnapshot()
})