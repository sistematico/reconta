// import { defineConfig } from 'drizzle-kit'

// export default defineConfig({
//   schema: "./src/drizzle/schema.ts",
//   out: "./src/drizzle",
//   dialect: 'sqlite',
//   dbCredentials: {
//     url: process.env.DB_URL!,
//   },
//   verbose: true,
//   strict: true,
// })


import type { Config } from 'drizzle-kit'

export default {
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle',
  dialect: 'sqlite',
  dbCredentials: {
    url: process.env.DB_URL!,
  },
} satisfies Config