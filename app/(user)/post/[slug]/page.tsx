import { groq } from "next-sanity";
import Image from "next/image";
import React from "react";
import { client } from "lib/sanity.client";
import { formatedDate, urlFor } from "lib";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "components/RichTextComponents";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 36; // Revalidate the SSR pages every 1 hour.

export async function generateStaticParams() {
  const query = groq`
    *[_type=="post"]
    {
      slug
    }
  `;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map((slug) => ({
    slug,
  }));
}

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
  const {
    _id,
    _createdAt,
    mainImage,
    author,
    title,
    body,
    description,
    categories,
  } = post;

  return (
    <article className="px-10 pb-28">
      <section className="sapce-y-2 border border-[#62d7a2] text-white">
        <div className="relative min-h-56 flex flex-col md:flex-row justify-between">
          <div className="absolute top-0 w-full h-full opacity-10 blur-sm p-10">
            <Image
              className="object-cover object mx-auto"
              src={urlFor(mainImage).url()}
              alt={author.name}
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
                  <h3 className="text-lg font-bold">{author.name}</h3>
                  <div>{/* TODO: Author Bio */}</div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="italic pt-10">{description}</h2>
              <div className="flex items-center justify-end mt-auto space-x-2">
                {categories.map((category) => {
                  return (
                    <p
                      key={category._id}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4"
                    >
                      {category.title}
                    </p>
                  );
                })}
              </div>
            </div>
          </section>
        </div>
      </section>
      {/*  */}
      <PortableText value={body} components={RichTextComponents} />
    </article>
  );
};

export default Post;
