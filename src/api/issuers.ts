import { Issuer } from '../store/models/Issuers'

const addIssuer = async (url: string, nonce: string):Promise<Issuer> => {
  const issuer: Issuer = {
    name: "",
    email: "",
    id: "",
    url: ""
  }
  return issuer
}

export default {
  addIssuer
}