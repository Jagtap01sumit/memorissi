import { client } from "@/lib/sanityClient";
import { urlFor } from "@/lib/sanityClient";

const sliderImagesQuery = `*[_type == "sliderimages"]{
  _id,
  name,
  image
}`;

export async function fetchSliderImages() {
  try {
    const images = await client.fetch(sliderImagesQuery);

    const mapped = images.map((img) => ({
      ...img,
      image: img.image
        ? urlFor(img.image).width(1200).auto("format").url()
        : null,
    }));

    console.log(mapped, "resolved slider images");
    return mapped;
  } catch (err) {
    console.error("Error fetching slider images:", err.message);
    return [];
  }
}
