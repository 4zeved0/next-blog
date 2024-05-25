import { SanityDocument } from "next-sanity"
import Posts from "../components/Posts"
import { sanityFetch } from "../../../sanity/lib/fetch"
import { POSTS_QUERY } from "../../../sanity/lib/queries"
import TrendingPost from "../components/TrendingPost"
import SearchPost from "../components/SearchPost"
import CarouselPosts from "../components/CarouselPosts"
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from "../../../sanity/env"

export default async function Page() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  })

  const filteredPosts = posts.map((post) => {
    return post.title
  })

  return (
    <div className="grid grid-cols-1 md:gap-10 gap-5 px-2 md:grid-cols-3 w-full mb-5 mt-5 md:mt-10">
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-3xl font-bold text-center md:text-left">Recentes</h1>
        <SearchPost posts={posts} />
      </div>
      <div>
        <h1 className="text-3xl font-bold text-center md:text-left">Em alta</h1>
        <TrendingPost posts={posts} />
      </div>
      <div>
        <CarouselPosts posts={posts} />
      </div>
    </div >
  )
}