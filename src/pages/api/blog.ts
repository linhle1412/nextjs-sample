// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import blogs from './blogs.json'
type ResponseData = {
  data: any
}
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ data: blogs })
}
