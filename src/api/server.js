import { rest, setupWorker } from 'msw'
import { factory, primaryKey } from '@mswjs/data'
import { nanoid } from '@reduxjs/toolkit'
import { Server as MockSocketServer } from 'mock-socket'

const NUM_ITEMS = 10

// Add an extra delay to all endpoints, so loading spinners show up.
const ARTIFICIAL_DELAY_MS = 2000

export const db = factory({
  item: {
    id: primaryKey(nanoid),
    name: String,
  }
})

for (let i = 0; i < NUM_ITEMS; i++) {
  const newItem = { name: `item${i+1}` }
  db.item.create(newItem)
}

const serializeItem = (item) => item.name

export const handlers = [
  rest.get('/fakeApi/items', function (req, res, ctx) {
    const items = db.item.getAll().map(serializeItem)
    return res(ctx.delay(ARTIFICIAL_DELAY_MS), ctx.json(items))
  }),
]

export const worker = setupWorker(...handlers)
// worker.printHandlers() // Optional: nice for debugging to see all available route handlers that will be intercepted

/* Mock Websocket Setup */

const socketServer = new MockSocketServer('ws://localhost')

let currentSocket

const sendMessage = (socket, obj) => {
  socket.send(JSON.stringify(obj))
}
