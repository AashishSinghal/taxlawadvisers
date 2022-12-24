import Image from "next/image";
import React from "react";

type Props = {
  posts: Post[];
};

const BlogList = ({ posts }: Props) => {
  console.log(posts.length);

  return (
    <div>
      <hr className="border border=[#62d7a2] mb-10" />
      <div>
        {posts?.map((post) => {
          const { _id, mainImage } = post;
          return (
            <div key={_id}>
              <div>
                <Image className="object-cover object-left lg:object-center" src={urlFor(mainImage).url()} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogList;
