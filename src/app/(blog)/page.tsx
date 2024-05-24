import { SanityDocument } from "next-sanity"
import Posts from "../components/Posts"
import { sanityFetch } from "../../../sanity/lib/fetch"
import { POSTS_QUERY } from "../../../sanity/lib/queries"
import TrendingPost from "../components/TrendingPost"
import SearchPost from "../components/SearchPost"

export default async function Page() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  })

  let filteredPosts = posts.map((post) => {
    return post.title
  })


  return <>
    <div className="grid grid-cols-3 gap-10">
      <div className="col-span-2">
        <h1 className="text-3xl font-bold mt-10">Recentes</h1>
        <SearchPost posts={posts} />
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-10">Em alta</h1>
        <TrendingPost posts={posts} />
      </div>
    </div >
  </>
}