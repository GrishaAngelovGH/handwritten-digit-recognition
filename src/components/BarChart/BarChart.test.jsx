import { render } from '@testing-library/react'

import BarChart from './BarChart'

test('should render BarChart component', () => {
  const view = render(<BarChart />)

  expect(view).toMatchSnapshot()
})