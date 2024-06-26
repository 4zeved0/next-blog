// ./components/Post.tsx

import Image from "next/image"
import { PortableText } from "@portabletext/react"
import { SanityDocument } from "next-sanity"
import { projectId, dataset } from "../../../sanity/env"
import { urlFor } from "./ImageBuilder"

export default function Post({ post }: { post: SanityDocument }) {
  const { title, mainImage, body } = post

  return (
    <main className="prose prose-lg p-4 max-w-7xl mx-auto">
      {title ? <h1 className="text-center pt-10">{title}</h1> : null}
      {mainImage ? (
        <Image
          className="float-left m-0 mr-4 rounded-lg"
          src={urlFor(mainImage)}
          width={300}
          height={300}
          alt={mainImage.alt || ""}
        />
      ) : null}
      {body ? <PortableText value={body} /> : null}
    </main>
  )
}