import { rest, setupWorker } from 'msw'
import { factory, primaryKey } from '@mswjs/data'
import { nanoid } from '@reduxjs/toolkit'

const NUM_ITEMS = 10

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const getDelay = (minSeconds, maxSeconds) => {
  return (getRandomInt(maxSeconds - minSeconds + 1) + minSeconds) * 1000;
}

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

export const handlers = [
  rest.get('/fakeApi/items', function (req, res, ctx) {
    const name = req.url.searchParams.get('name')
    const items = db.item.findMany({
      where: { name: { contains: name } }
    })
    return res(ctx.delay(getDelay(2, 4)), ctx.json(items))
  }),
]

export const worker = setupWorker(...handlers)
// worker.printHandlers() // Optional: nice for debugging to see all available route handlers that will be intercepted
