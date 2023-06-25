import PageTitle from "@/components/PageTitle"
import SectionContainer from "@/components/SectionContainer"
import Tag from "@/components/Tag"
import formatDate from "@/libs/utils/formatDate"
import { Blog } from "@/models/blog"
import siteMetadata from "@/siteMetadata"
import { GetStaticProps } from "next"

export async function getStaticPaths() {
    const resp = await fetch(process.env.BASE_URL + '/blog')
    const { data } = await resp.json()
    const paths = data.map((blog: Blog) => ({
        params: { slug: blog.slug },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ blog: Blog }> = async (context) => {
    const { params } = context
    const fetchBlogDetail = async (slug: string | string[] | undefined) => {
        try {
            const resp = await fetch(process.env.BASE_URL + '/blog?slug=' + slug)
            const { data } = await resp.json()
            return data
        } catch (e) {
            return {}
        }
    }
    const data = await fetchBlogDetail(params?.slug)
    return {
        props: { blog: data }
    }
}


const Blog = ({ blog }: { blog: Blog }) => {
    return (
        <SectionContainer>
            <article>
                <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                    <header className="pt-6 xl:pb-6">
                        <div className="space-y-1 text-center">
                            <dl className="space-y-10">
                                <div>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <time dateTime={blog?.createdAt}>
                                            {formatDate(blog?.createdAt)}
                                        </time>
                                    </dd>
                                </div>
                            </dl>
                            <div>
                                <PageTitle>{blog?.title}</PageTitle>
                            </div>
                        </div>
                    </header>
                    <div
                        className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
                        style={{ gridTemplateRows: 'auto 1fr' }}
                    >
                        <dl className="pt-6 pb-10 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
                            <dt className="sr-only">Authors</dt>
                            <dd>
                                {blog?.author}
                            </dd>
                        </dl>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                            <div className="prose max-w-none pt-10 pb-8 dark:prose-dark" dangerouslySetInnerHTML={{ __html: blog?.content }}></div>
                        </div>
                        <footer>
                            <div className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                                {blog?.tags && (
                                    <div className="py-4 xl:py-8">
                                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                                            Tags
                                        </h2>
                                        <div className="flex flex-wrap">
                                            {blog?.tags.map((tag) => (
                                                <Tag key={tag} text={tag} />
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </footer>
                    </div>
                </div>
            </article>
        </SectionContainer>
    )
}

export default Blog