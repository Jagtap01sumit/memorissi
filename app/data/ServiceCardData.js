import { client } from "@/lib/sanityClient";

export async function servicesData(slug) {
  try {
    const query = `*[_type == "page" && slug.current == $slug][0]{
  services[]->{
    _id,
    title,
    "cover_photo": bgImage.asset->url,
    "logo": logo.asset->url
  }
}`;

    if (!slug) throw new Error("slug is required");
    console.log(slug, "card slug");

    const data = await client.fetch(query, { slug });

    console.log(data, "category data ");

    if (!data || !data.services) {
      return [];
    }
    return data.services.map((service) => ({
      id: service._id,
      category_name: service.title,
      cover_photo: service.cover_photo,
      logo: service.logo,
    }));
  } catch (err) {
    console.error("Error fetching category services:", err.message);
    return [];
  }
}
