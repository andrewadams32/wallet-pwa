
async function stall(stallTime = 500) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

export default {
  login: async (email: string, password: string): Promise<boolean> => {
    await stall()
    return email === password
  },
  logout: async (): Promise<void> => {
    await stall()
  }
}