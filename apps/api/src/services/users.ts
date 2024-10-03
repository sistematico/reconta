import { db } from '@/drizzle'
import * as schema from '@/drizzle/schema'

export async function list() {
  const data = await db.select().from(schema.users)
  const users = data.map(({ password, ...user }) => user)
  return { users, message: 'Listando usuários', ok: true }
}