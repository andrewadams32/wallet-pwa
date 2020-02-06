const get = async (url: string): Promise<Response> => {
  return await fetch(url)
}

export default {
  get
}