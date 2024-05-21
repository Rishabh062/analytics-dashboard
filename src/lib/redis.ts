import { Redis } from '@upstash/redis'

export const redis = new Redis({
  url: 'https://destined-spider-48009.upstash.io',
  token: process.env.REDIS_KEY,
})
