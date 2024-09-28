import { Hono } from 'hono'
import { auth } from '@/routes'

const app = new Hono()

app.get('/', (c) => {
  return c.text('ReConta API')
})

app.route('/auth', auth)

export default { 
  port: 3030, 
  fetch: app.fetch, 
} 
