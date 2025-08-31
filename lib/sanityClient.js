import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: "2021-03-25",
  useCdn: true,
});
const builder = imageUrlBuilder(client);

export function urlFor(source) {
  return builder.image(source);
}
