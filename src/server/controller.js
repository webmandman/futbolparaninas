// @flow

export const startPage = () => null

export const joinPage = () => ({
  hello: { message: 'Server-side preloaded message' },
})

export const chatPage = () => ({
  hello: { messageAsync: 'Server-side preloaded message for async page' },
})

export const ChatEndpoint = (num: number) => ({
  serverMessage: `Hello from the server! (received ${num})`,
})
