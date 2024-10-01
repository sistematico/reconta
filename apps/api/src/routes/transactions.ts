import { Hono } from 'hono'
import { login, register } from '@/services/auth'

const app = new Hono()

app.post('/add', async c => { 
  try {
    const { user, password } = await c.req.json()
    const data = await login(user, password)
    if ('ok' in data && !data.ok) return c.json({ message: 'Erro', error: data, ok: false }, 400)  
    return c.json(data, 200)  
  } catch (error) {
    return c.json({ message: 'Erro', error: JSON.stringify(error), ok: false }, 400)  
  }  
})

app.post('/list', async c => { 
  try {
    const json = await c.req.json()
    const data = await register(json)
    return c.json(data, 201)
  } catch (error) {
    return c.json({ message: 'Erro', error: JSON.stringify(error), ok: false }, 400)
  }  
})

export { app as transactions }