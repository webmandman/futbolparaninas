// @flow

import React from 'react'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import Nav from './component/nav'
import StartPage from './component/page/start'
import JoinPage from './component/page/join'
import ChatPage from './component/page/chat'
import {
  START_PAGE_ROUTE,
  JOIN_PAGE_ROUTE,
  CHAT_PAGE_ROUTE,
} from '../shared/routes'

const App = () =>
  <div style={{ paddingTop: 54 }}>
    <Nav />
    <Switch>
      <Route exact path={START_PAGE_ROUTE} render={() => <StartPage />} />
      <Route path={JOIN_PAGE_ROUTE} render={() => <JoinPage />} />
      <Route path={CHAT_PAGE_ROUTE} render={() => <ChatPage />} />
    </Switch>
  </div>

export default App
