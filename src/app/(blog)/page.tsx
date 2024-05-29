import { SanityDocument } from "next-sanity"
import { sanityFetch } from "../../../sanity/lib/fetch"
import { POSTS_QUERY } from "../../../sanity/lib/queries"
import TrendingPost from "../components/TrendingPost"
import SearchPost from "../components/SearchPost"
import CarouselPosts from "../components/CarouselPosts"
import InformationsAuthor from "../components/InformationsAuthor"

export default async function Page() {
  const posts = await sanityFetch<SanityDocument[]>({
    query: POSTS_QUERY,
  })

  return (
    <div className="grid grid-cols-1 gap-5 px-2 w-full mb-5 mt-5 md:mt-10 md:gap-10 md:grid-cols-3">
      <div className="bg-slate-200 py-5 px-4 rounded-md">
        <h1 className="text-3xl font-bold text-center md:text-center row-span-3">Em alta</h1>
        <TrendingPost posts={posts} />
      </div>
      <div className="col-span-1 md:col-span-2">
        <h1 className="text-3xl font-bold text-center md:text-left mb-5">Recentes</h1>
        <SearchPost posts={posts} />
      </div>
      <div className="col-span-1 md:col-span-3 mt-5">
        <CarouselPosts posts={posts} />
      </div>
      <div className="col-span-1 md:col-span-3 mt-5">
        <InformationsAuthor />
      </div>
    </div >
  )
}