// @flow

import {
  startPage,
  joinPage,
  chatPage,
  ChatEndpoint,
} from './controller'

import {
  START_PAGE_ROUTE,
  JOIN_PAGE_ROUTE,
  CHAT_PAGE_ROUTE,
  ChatEndpointRoute,
} from '../shared/routes'

import renderApp from './render-app'

export default (app: Object) => {
  app.get(START_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, startPage()))
  })

  app.get(JOIN_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, joinPage()))
  })

  app.get(CHAT_PAGE_ROUTE, (req, res) => {
    res.send(renderApp(req.url, chatPage()))
  })

  app.get(ChatEndpointRoute(), (req, res) => {
    res.json(ChatEndpoint(req.params.num))
  })

  app.get('/500', () => {
    throw Error('Fake Internal Server Error')
  })

  app.get('*', (req, res) => {
    res.status(404).send(renderApp(req.url))
  })

  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    res.status(500).send('Something went wrong!')
  })
}
