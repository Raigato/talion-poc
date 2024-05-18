import { Env } from './env'

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {
      [key: string]: unknown
    }
  }
}
