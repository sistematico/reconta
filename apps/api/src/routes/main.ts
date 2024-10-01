import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('ReConta API')
})

export { app as main }