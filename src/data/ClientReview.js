import { client } from "@/lib/sanityClient";
export async function getClientTestimonials(slug) {
  const query = `*[_type == "page" && slug.current == $slug][0]{
  reviews->{
    _id,
    groupTitle,
    reviews[]{
      name,
      title,
      review,
      rating,
      "image": image.asset->url
    }
  }
}

`;

  try {
    const data = await client.fetch(query, { slug });

    if (data) {
      return data.reviews;
    }
  } catch (e) {
    console.log("error", e);
  }
}
