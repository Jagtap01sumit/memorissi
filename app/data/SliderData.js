import { client } from "@/lib/sanityClient";
import { urlFor } from "@/lib/sanityClient";

export async function fetchSliderImages(slug) {
  try {
    const query = `*[_type == "page" && slug.current == $slug][0]{
      sliderImages[]{
        asset
      }
    }`;

    const data = await client.fetch(query, { slug });
    if (!data?.sliderImages) return [];

    const imagesArray = data.sliderImages.map((img) =>
      img?.asset ? urlFor(img.asset).width(1200).auto("format").url() : null
    );

    console.log(imagesArray, "resolved slider images");
    return imagesArray;
  } catch (err) {
    console.error("Error fetching slider images:", err.message);
    return [];
  }
}
