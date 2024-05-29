'use client'
import { useState } from 'react';
import { SanityDocument } from "next-sanity";
import Link from 'next/link';
import { formattedDate } from './FormatDate';

export default function SearchPost({ posts }: { posts: SanityDocument[] }) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredPosts: SanityDocument[] = posts.filter((post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  let postsToDisplay: SanityDocument[];
  if (searchTerm === '') {
    postsToDisplay = posts
  } else {
    postsToDisplay = filteredPosts.slice(0, 2);
  }

  return (
    <div className='overflow-auto h-full mb-5'>
      <div className="flex items-center justify-center border-transparent mb-5 md:w-[99%] w-[98%]">
        <input
          type="text"
          placeholder="Pesquisar"
          className="outline-none p-2 border border-slate-300 w-full rounded-md"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {postsToDisplay.map((post) => {
        return (
          <div key={post._id} className='max-h-40 md:w-[99%] w-[98%]'>
            <Link href={post.slug.current}>
              <div className="py-4 px-2 bg-slate-300 rounded-md mb-3 hover:bg-slate-400 flex justify-between items-center">
                <h2 className='w-full md:w-auto'>{post.title}</h2>
                <p className="text-center md:text-left text-sm text-slate-300 bg-slate-600 rounded-md px-2 py-1">postado em: {formattedDate(post._createdAt)}</p>
              </div>
            </Link>
          </div>
        )
      })}
    </div>);
}
