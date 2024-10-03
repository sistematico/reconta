export async function bcryptHash(passwd: string) { 
  const hasher = new Bun.CryptoHasher('sha512')
  const hash = hasher.update(passwd, 'hex')
  return hash
}