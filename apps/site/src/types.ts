export interface User {
  id: number
  username: string
  email: string
  password: string
  role: string
  token: string
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