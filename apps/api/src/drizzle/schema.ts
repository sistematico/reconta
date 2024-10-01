import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
  username: text('username').notNull().unique(),
  email: text('email').notNull().unique(),
  password: text('password').notNull(),
  role: text('role').notNull().default('user')
})

export const profiles = sqliteTable('profiles', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  fullname: text('fullname'),
  avatar: text('avatar').default('default.jpg'),
  userId: integer("user_id").references(() => users.id),
  createdAt: text('created_at').notNull().default('now'),
  updatedAt: text('updated_at')
})

export const accounts = sqliteTable('accounts', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  bank: text('bank').notNull(),
  balance: integer('balance').notNull().default(0),
  createdAt: text('created_at').notNull().default('now'),
})

export const transactions = sqliteTable('transactions', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  type: text('type').notNull().default('expense'), // expense, income, transfer
  date: text('date').notNull().default('now'),
  accountId: integer('account_id').references(() => accounts.id),
  userId: integer('user_id').references(() => users.id),
  ammount: integer('ammount').notNull(),
})

// TABLE account
//     id
//     account_name
//     current_balance

// TABLE transaction
//     id
//     account_id
//     payee
//     date
//     amount
//     category