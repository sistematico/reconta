import { db } from '@/drizzle'
import * as schema from '@/drizzle/schema'

const user = await db.insert(schema.users).values({
  username: 'lucas',
  email: 'lucas@reconta.app',
  password: '123'
}).returning()

await db.insert(schema.profiles).values({
  fullname: 'Lucas Brum',
  userId: user[0].id
})

console.log(`🌱 Seeding complete`)