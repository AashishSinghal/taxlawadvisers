import { client } from "./sanity.client";
import imageUrlbuilder from "@sanity/image-url";

const builder = imageUrlbuilder(client);

export const urlFor = (source: any) => {
  return builder.image(source);
};

export const formatedDate = (date: any) => {
  return new Date(date).toLocaleDateString(undefined, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
