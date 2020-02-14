import { role } from '../store/models/User'

async function stall(stallTime = 500) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

export default {
  login: async (email: string, password: string): Promise<{loggedIn: boolean, roles: role[]}> => {
    await stall()
    return {
      loggedIn: email === password,
      roles: ["recipient"]
    }
  },
  logout: async (): Promise<void> => {
    await stall()
  }
}