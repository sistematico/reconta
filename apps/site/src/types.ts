export interface User {
  id: number
  username: string
  email: string
  password: string
  role: string
  tokens: Token
  profile: Profile
}

interface Profile {
  id: number
  fullname: string
  avatar: string
  userId: number
  createdAt: string
  updatedAt: string
}

interface Token {
  id: number
  accessToken: string
  refreshToken: string
  userId: number
}

export interface Account {
  id: number
  name: string
  bank: string
  balance: number
  account: number
  userId: number
  ammount: number
}

export interface Transaction {
  id?: number
  type: string
  date: string
  accountId: number
  userId: number
  ammount: number
}