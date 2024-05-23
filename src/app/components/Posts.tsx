'use client';

import { SanityDocument } from "next-sanity";
import { format } from 'date-fns';
import Link from "next/link";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100 mt-5">
      {posts?.length > 0 ? (
        posts.map((post) => {
          const formattedDate: string = format(new Date(post._createdAt), 'dd/MM/yyyy');
          return (
            <Link key={post._id} href={post.slug.current}>
              <div className="py-4 px-2 bg-slate-300 rounded-md mb-2 hover:bg-slate-400 flex justify-between">
                <h2>{post.title}</h2>
                <p className="text-sm text-slate-300 bg-slate-600 rounded-md px-2 py-1">postado em: {formattedDate}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <div className="p-4 text-red-500">Nenhum post encontrado</div>
      )}
    </main>
  );
}
