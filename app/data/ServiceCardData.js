import { client } from "@/lib/sanityClient";


const serviceCategoriesQuery = `*[_type == "services"]{
   _id,
  title,
  "cover_photo": bgImage.asset->url,
  "logo": logo.asset->url
}`;

export async function servicesData() {
  try {
    const servicesCategories = await client.fetch(serviceCategoriesQuery);
    return servicesCategories.map((service) => ({
      id: service._id,
      category_name: service.title,
      cover_photo: service.cover_photo,
      logo: service.logo,
    }));
  } catch (err) {
    console.error("Error fetching services:", err.message);
    return [];
  }
}
