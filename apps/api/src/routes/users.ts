import { Hono } from 'hono'
import { list } from '@/services/users'

const app = new Hono()

app.get('/list', async c => { 
  const data = await list()
  return c.json(data, 201)
})

export { app as users }