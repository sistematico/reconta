import { db } from '@/drizzle'
import { eq } from 'drizzle-orm'
import * as schema from '@/drizzle/schema'

async function revoke(userId: number) {
  await db.update(schema.tokens).set({ revoked: true }).where(eq(schema.tokens.userId, userId))
}

export { revoke }