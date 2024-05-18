import 'server-only'
import { z } from 'zod'

let token: string = ''

const tokenResponseSchema = z.object({
  access_token: z.string(),
})

const updateOauthToken = async () => {
  const response = await fetch('https://id.twitch.tv/oauth2/token', {
    method: 'POST',
    body: `client_id=${process.env.TWITCH_APP_CLIENT_ID}&client_secret=${process.env.TWITCH_APP_CLIENT_SECRET}&grant_type=client_credentials`,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })

  const data = await response.json()

  const parse = tokenResponseSchema.safeParse(data)

  if (!parse.success) {
    console.error(parse.error)
    throw new Error('Failed to parse token response')
  }

  token = parse.data.access_token
}

interface CheckLiveStatusResponse {
  data: {
    user_login: string
  }[]
}

export const checkLiveStatus = async (): Promise<boolean> => {
  try {
    const response = await fetch(
      `https://api.twitch.tv/helix/streams?user_login=${process.env.NEXT_PUBLIC_TWITCH_USER_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Client-Id': process.env.TWITCH_APP_CLIENT_ID,
        },
        next: {
          revalidate: 60,
        },
      },
    )

    if (response.status === 401) {
      await updateOauthToken()
      return checkLiveStatus()
    }

    const status: CheckLiveStatusResponse = await response.json()

    return status.data.length > 0
  } catch {
    return false
  }
}
