import { db } from '@/drizzle'
import * as schema from '@/drizzle/schema'

await db.insert(schema.users).values({
  user: 'lucas',
  email: 'lucas@reconta.app',
  password: '123456'
})

console.log(`🌱 Seeding complete`)