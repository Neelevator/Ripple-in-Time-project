import { PinataSDK } from "pinata"

import 'dotenv/config'

export const pinata = new PinataSDK({
  pinataJwt: `${process.env.API_KEY}`,
  pinataGateway: `${process.env.API_SECRET}`
})