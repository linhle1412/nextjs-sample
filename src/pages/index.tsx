import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Blog } from '@/models/blog'
import BlogCard from '@/components/BlogCard'
import type { GetStaticProps } from 'next'

const inter = Inter({ subsets: ['latin'] })
const MAX_DISPLAY = 10

export const getStaticProps: GetStaticProps<{ blogs: Blog[] }> = async () => {
  const fetchBlogs = async () => {
    try {
      const resp = await fetch(process.env.BASE_URL + '/blog')
      const { data } = await resp.json()
      return data
    } catch (e) {
      return []
    }
  }
  const data = await fetchBlogs()
  return {
    props: { blogs: data }
  }
}

export default function Home({ blogs = [] }: { blogs: Blog[] }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {!blogs.length && 'No posts found.'}
        {blogs.slice(0, MAX_DISPLAY).map((blog) => {
          return (
            <li key={blog.id} className="py-12">
              <BlogCard blog={blog} />
            </li>
          )
        })}
      </ul>
    </main>
  )
}
