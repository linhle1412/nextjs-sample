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
  if (req.query.slug) {
    const blog = blogs.find((blog) => blog.slug === req.query.slug)
    if (blog) return res.status(200).json({ data: blog })
    return res.status(404)
  }
  res.status(200).json({ data: blogs })
}
