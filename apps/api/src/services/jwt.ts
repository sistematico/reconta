import jwt from 'jsonwebtoken'
import type { SelectUser } from '@/drizzle/schema'
import { revoke } from '@/models/token'

function generateAccessToken(user: SelectUser) {
  return jwt.sign({ userId: user.id }, process.env.JWT_ACCESS_SECRET as string, { expiresIn: '5m' })
}

function generateRefreshToken(user: SelectUser, jti: string) {
  return jwt.sign({ userId: user.id, jti }, process.env.JWT_REFRESH_SECRET as string, { expiresIn: '8h' })
}

function generateTokens(user: SelectUser, jti: string) {
  const accessToken = generateAccessToken(user)
  const refreshToken = generateRefreshToken(user, jti)
  return { accessToken, refreshToken }
}

async function revokeTokens(userId: number) {
  await revoke(userId)
}

export { generateAccessToken, generateRefreshToken, generateTokens, revokeTokens }
