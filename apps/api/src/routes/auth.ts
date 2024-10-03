import { Hono } from 'hono'
import { login, register } from '@/services/auth'

const app = new Hono()

app.post('/signin', async c => { 
  try {
    const { identifier, password } = await c.req.json()
    console.log('identifier', identifier, 'password', password)
    const data = await login(identifier, password)
    if (!data || !data.ok) return c.json({ message: 'Erro ao entrar na conta', ok: false }, 200)  
    return c.json(data, 200)  
  } catch (error) {
    return c.json({ message: 'Erro', error: JSON.stringify(error), ok: false }, 400)  
  }  
})

app.post('/signup', async c => { 
  try {
    const { username, email, password } = await c.req.json()
    console.log('username', username, 'email', email, 'password', password)
    const data = await register(username, email, password)
    if (!data || !data.ok) return c.json({ message: 'Erro ao registrar uauário', ok: false }, 200)  
    return c.json(data, 201)
  } catch (error) {
    return c.json({ message: 'Erro', error: JSON.stringify(error), ok: false }, 400)
  }  
})

export { app as auth }