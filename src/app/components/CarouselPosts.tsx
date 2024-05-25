import { SanityDocument } from "next-sanity";
import Link from "next/link";
import imageUrlBuilder from '@sanity/image-url'
import { projectId, dataset } from "../../../sanity/env"
import Image from "next/image";

export default function CarouselPosts({ posts }: { posts: SanityDocument[] }) {
  const builder = imageUrlBuilder({
    projectId,
    dataset
  })
  const urlFor = (source: any) => builder.image(source)
  return (
    <div>
      {posts.map((post) => {
        const { title, mainImage, body, slug } = post;
        if (!mainImage) return null;
        return (
          <div key={post._id}>
            <Link href={{
              pathname: `/${slug.current}`,
            }}>
              <h2>{title}</h2>
              <Image
                src={urlFor(mainImage)
                  .width(200)
                  .height(200)
                  .flipHorizontal()
                  .url()}
                alt={mainImage.alt}
                width={200}
                height={200}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
