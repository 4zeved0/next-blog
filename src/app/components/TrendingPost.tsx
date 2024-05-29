import { SanityDocument } from "next-sanity";
import Link from "next/link";
export interface Category {
  _id?: string;
  title?: string | undefined;
}

export interface Post extends SanityDocument {
  title?: string;
  mainImage?: {
    _type: "image";
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  categories?: Category[];
}

export default function TrendingPost({ posts }: { posts: Post[] }) {

  return (
    <main className="mx-auto grid grid-cols-1 mt-5">
      {posts?.length > 0 ? (
        posts.map((post) => {
          const hasCategories = post.categories && post.categories.length > 0;

          return (
            <div key={post._id}>
              {hasCategories ? (
                <Link key={post._id} href={post.slug.current}>
                  <div className="py-4 px-2 bg-slate-300 rounded-md mb-2 hover:bg-slate-400 flex justify-between">
                    <h2>{post.title}</h2>
                    <div className="flex items-center">
                      <svg
                        viewBox="0 0 1024 1024"
                        fill="rgb(30 41 59 / var(--tw-bg-opacity))"
                        height="1em"
                        width="1em"
                      >
                        <path d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 00.6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0046.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ) : null
              }
            </div>
          );
        })
      ) : (
        <div className="p-4 text-red-500">Nenhum post encontrado</div>
      )}
    </main>
  );
}
