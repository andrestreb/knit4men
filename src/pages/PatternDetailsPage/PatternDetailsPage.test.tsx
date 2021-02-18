/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
Component: Component: src/pages/PatternDetailsPage/PatternDetailsPage.test.tsx
*/

import React from 'react'
import { shallow } from 'enzyme'
import PatternDetailsPage from './PatternDetailsPage'

const routeComponentPropsMock = {
  history: {
    location: {
      pathname: '/PatternDetailsPage'
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  location: {} as any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  match: {} as any,
}
describe('<PatternDetailsPage />', () => {
  let component

  beforeEach(() => {
    component = shallow(<PatternDetailsPage {...routeComponentPropsMock} />)
  })

  test('It should mount', () => {
    expect(component.length).toBe(1)
  })
})
