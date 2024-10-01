import { db } from '@/drizzle'
import { eq, and } from 'drizzle-orm'
import * as schema from '@/drizzle/schema'

type NewUser = typeof schema.users.$inferInsert

export const login = async (username: string, password: string) => {
  const user = await db.select()
    .from(schema.users)
    .where(
      and(
        eq(schema.users.username, username),
        eq(schema.users.password, password),
      )
    )
  
  if (!user) return { message: 'Error', ok: false }
  return { user, message: 'Success', ok: true }
}

export const register = async (newUser: NewUser) => {
  const { username, email, password } = newUser
  const data = await db.insert(schema.users).values({ username, email, password }).returning()
  
  if (!data) return { message: 'Error creating user', ok: false }
  return { user: data, message: 'Success creating user', ok: true }
}