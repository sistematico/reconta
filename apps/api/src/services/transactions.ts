import { db } from '@/drizzle'
import { eq } from 'drizzle-orm'
import * as schema from '@/drizzle/schema'

export type InsertTransaction = typeof schema.transactions.$inferInsert

export async function add(transaction: InsertTransaction) {
  const [data] = await db.insert(schema.transactions).values(transaction).onConflictDoNothing().returning()
  return { transaction: data, message: 'Listando transações', ok: true }
}

export async function list(userId: number) {
  const transactions = await db.select().from(schema.transactions).where(eq(schema.transactions.userId, userId))
  return { transactions, message: 'Listando transações', ok: true }
}