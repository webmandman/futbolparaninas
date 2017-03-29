// @flow

export const START_PAGE_ROUTE = '/'
export const JOIN_PAGE_ROUTE = '/join'
export const CHAT_PAGE_ROUTE = '/chat'

export const ChatEndpointRoute = (num: ?number) => `/ajax/chat/${num || ':num'}`
