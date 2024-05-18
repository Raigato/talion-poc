import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  TWITCH_APP_CLIENT_ID: z.string(),
  TWITCH_APP_CLIENT_SECRET: z.string(),
  NEXT_PUBLIC_TWITCH_USER_NAME: z.string(),
})

envSchema.parse(process.env)

export type Env = z.infer<typeof envSchema>
