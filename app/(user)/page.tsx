import React from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "../../lib/sanity.client";
import PreviewSuspense from "../../components/PreviewSuspense";
import PreviewBlogList from "../../components/PreviewBlogList";
import BlogList from "../../components/BlogList";
import RootLayout from "./layout";

const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

const fallback = () => (
  <div role="status">
    <p className="text-center text-lg animate-pulse text-[#62d7a2]">
      Loading Preview Data...
    </p>
  </div>
);

export const revalidate = 36; // Revalidate the SSR pages every 1 hour.

export default async function HomePage() {
  if (previewData()) {
    return (
      <RootLayout>
        <PreviewSuspense fallback={fallback()}>
          <PreviewBlogList query={query} />
        </PreviewSuspense>
      </RootLayout>
    );
  }

  const posts = await client.fetch(query);

  return (
    <RootLayout>
      <BlogList posts={posts} />
    </RootLayout>
  );
}
