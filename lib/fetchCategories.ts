import { groq } from "next-sanity";
import { client } from "./sanity.client";

const query = groq`
*[_type=='category']{
  ...,
} | order(title asc)
`;

export default async function fetchCategories() {
  console.log("Client - ", client);
  const categories = await client.fetch(query);
  console.log("Categories from fetch - ", categories);
  return categories;
}
