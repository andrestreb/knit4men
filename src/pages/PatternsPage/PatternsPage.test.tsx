/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/PatternsPage/PatternsPage.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import PatternsPage from './PatternsPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/PatternsPage'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<PatternsPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<PatternsPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
