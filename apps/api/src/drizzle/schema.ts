import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  name: text('name'),
  user: text('user').notNull().unique(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
})
