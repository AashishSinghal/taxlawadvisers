import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { client } from "../../../../lib/sanity.client";
import { formatedDate, urlFor } from "../../../../lib";
type Props = {
  params: {
    slug: string;
  };
};

const Post = async ({ params: { slug } }: Props) => {
  const query = groq`
    *[_type=="post" && slug.current == $slug][0]
    {
        ...,
        author->,
        categories[]->
    }
    `;

  const post: Post = await client.fetch(query, { slug });
  const { _id, _createdAt, mainImage, author, title } = post;
  
  return (
    <article className="px-10 pb-28">
      <section className="sapce-y-2 border border-[#62d7a2] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object mx-auto"
              src={urlFor(mainImage).url()}
              alt={author.name}
              height={40}
              width={40}
              fill
            />
          </div>
          <section className="p-5 bg-[#62d7a2] w-full">
            <div className="flex flex-col md:flex-row justify-between gap-y-5">
              <div>
                <h1 className="text-4xl font-extrabold">{title}</h1>
                <p>{formatedDate(_createdAt)}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Image
                  className="rounded-full"
                  src={urlFor(author.image).url()}
                  alt={author.name}
                  height={40}
                  width={40}
                />
                <div className="w-64">
                  <h3>{author.name}</h3>
                  <div>
                    {/* TODO: Author Bio */}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </article>
  );
};

export default Post;
