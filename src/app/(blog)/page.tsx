import { SanityDocument } from "next-sanity"
import Posts from "../components/Posts"
import { sanityFetch } from "../../../sanity/lib/fetch"
import { POSTS_QUERY } from "../../../sanity/lib/queries"
import TrendingPost from "../components/TrendingPost"

export default async function Page() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  })
  return <>
    <div className="grid grid-cols-3 gap-10">
      <div className="col-span-2">
        <h1 className="text-3xl font-bold mt-10">Recentes</h1>
        <Posts posts={posts} />
      </div>
      <div>
        <h1 className="text-3xl font-bold mt-10">Em alta</h1>
        <TrendingPost posts={posts} />
      </div>
    </div >
  </>
}