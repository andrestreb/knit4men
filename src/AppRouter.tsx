// src/AppRouter.tsx

import React, { FunctionComponent, Suspense } from 'react'
import { StylesProvider } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import HomePage from './pages/HomePage/HomePage'
import AboutPage from './pages/AboutPage/AboutPage'
import PatternsPage from './pages/PatternsPage/PatternsPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import PatternDetailsPage from './pages/PatternDetailsPage/PatternDetailsPage'
import Header from './layout/Header/Header'

const AppRouter: FunctionComponent = () => {
  return (
    <StylesProvider injectFirst>
      <Router>
        <Provider store={store}>
          <Suspense fallback={<span>Loading...</span>}>
            <Header />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/About" component={AboutPage} />
              <Route exact path="/Patterns" component={PatternsPage} />
              <Route path="/Patterns/:patternId" component={PatternDetailsPage} />
              <Route path="/404" component={NotFoundPage} />
              <Redirect to="/404" />
            </Switch>
          </Suspense>
        </Provider>
      </Router>
    </StylesProvider>
  )
}

/*
    EE: To replace Recoil state management with Redux Toolkit;

    import { Provider } from 'react-redux'
    import store from './redux/store'

    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
      </Provider>
    </Router>
 
    EE: To replace Redux state management with Recoil ;

    import React, { FunctionComponent, Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import HomePage from './pages/HomePage/HomePage'

const AppRouter: FunctionComponent = () => {
  return (
    <Router>
      <RecoilRoot>
        <Suspense fallback={<span>Loading...</span>}>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/HomePage" component={HomePage} />
          </Switch>
        </Suspense>
      </RecoilRoot>
    </Router>
  )
}
 */

export default AppRouter
