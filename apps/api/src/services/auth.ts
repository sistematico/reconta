import { z } from 'zod'
import { randomUUID } from 'crypto'
import { db } from '@/drizzle'
import { eq, or } from 'drizzle-orm'
import * as schema from '@/drizzle/schema'
import { generateTokens } from '@/services/jwt'

export async function login(identifier: string, passwd: string) {
  const [found] = await db.select()
    .from(schema.users)
    .where(
      or(
        eq(schema.users.email, identifier),
        eq(schema.users.username, identifier)
      )
    )
  
  if (!found) return { message: 'Usuário não encontrado', ok: false }

  const hash = await Bun.password.hash(passwd)
  const isMatch = await Bun.password.verify(found.password, hash)
  const { password, ...user } = found
  
  if (!isMatch) return { message: 'Usuário não encontrado', ok: false }
      
  const tokens = generateTokens(found, randomUUID())
  await db.insert(schema.tokens).values({ refreshToken: tokens.refreshToken, userId: user.id })

  return { user, tokens, message: 'Sucesso ao entrar na conta', ok: true }
}

export async function register(username: string, email: string, passwd: string) {
  if (!username || !email || !passwd) return { message: 'Preencha todos os campos obrigatórios', ok: false }

  const UserSchema = z.object({
    username: z.string().min(3, 'Username must be at least 3 characters'),
    email: z.string().email('Invalid email format'),
    passwd: z.string().min(3, 'Password must contain at least 3 characters'),
  })

  try {
    UserSchema.parse({ username, email, passwd })
    // console.log("Validation passed: ", parsedUser)
  } catch (error) {
    if (error instanceof z.ZodError) {
      console.error("Falha na validação: ", error.issues[0])
    } else {
      console.error("Erro inesperado: ", error)
    }
  }

  const [found] = await db.select()
    .from(schema.users)
    .where(
      or(
        eq(schema.users.email, email),
        eq(schema.users.username, username)
      )
    )

  if (found) return { message: 'O usuário já existe', ok: false }

  const hash = await Bun.password.hash(passwd)
  const [data] = await db.insert(schema.users).values({ username, email, password: hash }).onConflictDoNothing().returning()
  const { password, ...user } = data

  if (!data) return { message: 'Erro ao criar o usuário', ok: false }
  
  return { user, message: 'Novo usuário criado com sucesso', ok: true }
}