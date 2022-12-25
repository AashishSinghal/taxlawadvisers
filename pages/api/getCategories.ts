import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { client } from "lib/sanity.client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case "GET":
      try {
        const query = groq`
            *[_type=='category']{
              ...,
            } | order(title asc)
            `;
        await client.fetch(query).then((res) => {
          console.log("Res - ", res);
          res.status(200);
        });
      } catch (err) {
        console.error(err);
        res.status(500).json({ msg: "Error, check console" });
      }
      break;
    default:
      break;
  }
}
