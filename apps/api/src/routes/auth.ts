import { Hono } from 'hono'
import { db } from '@/drizzle'
import * as schema from '@/drizzle/schema'

const app = new Hono()

app.post('/signup', async c => { 
  try {
    const { name, user, email, password } = await c.req.json()
    const data = await db.insert(schema.users).values({ user, name, email, password }).returning()
    return c.text('User created: ' + JSON.stringify(data), 201)  
  } catch (error) {
    return c.text('Erro ao criar usuário: ' + error, 400)  
  }  
})

export { app as auth }