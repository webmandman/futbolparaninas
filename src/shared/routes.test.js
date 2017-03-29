import { ChatEndpointRoute } from './routes'

test('ChatEndpointRoute', () => {
  expect(ChatEndpointRoute()).toBe('/ajax/chat/:num')
  expect(ChatEndpointRoute(123)).toBe('/ajax/chat/123')
})
