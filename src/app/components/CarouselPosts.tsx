'use client';

import { SanityDocument } from "next-sanity";
import useEmblaCarousel from 'embla-carousel-react';
import { urlFor } from "./ImageBuilder";
import Image from "next/image";
import Autoplay from 'embla-carousel-autoplay'
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Link from "next/link";

export default function CarouselPosts({ posts }: { posts: SanityDocument[] }) {
  const filteredPosts = posts.filter(post => post.mainImage).slice(0, 5);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 80, }, [Autoplay()]);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <div>
      <div ref={emblaRef} className="w-full h-96 mb-5 rounded-md overflow-hidden cursor-pointer relative">
        <div className="flex">
          {filteredPosts.map((post) => {
            const { title, mainImage, _id }: any = post;
            return (
              <div key={_id} className="flex-[0_0_100%] flex justify-center items-center w-full">
                <Link href={post.slug.current}>
                  {mainImage && (
                    <div className="relative h-96 after:content-[''] after:absolute after:inset-0 after:bg-black after:w-full after:h-full after:top-0 after:left-0 after:opacity-90">
                      <Image
                        src={urlFor(mainImage)}
                        alt={title}
                        width={2000}
                        height={2000}
                        className="object-cover h-full md:h-auto"
                      />
                      <div className="inset-center text-slate-100 z-10 text-2xl">
                        {title}
                      </div>
                    </div>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap justify-center items-center bg-red-600 mb-16">
          {/* {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))} */}
        </div>
        <div className="flex flex-wrap justify-center items-center w-full h-11 gap-2 absolute z-50 left-0 bottom-0">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot hover:bg-slate-100'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
