import { getTitleById, getIdByTitle } from "@/lib/storage";
import { client } from "@/lib/sanityClient";
export async function getTitleByIdForCategory(id) {
  const { data, error } = await getTitleById(id);
  console.log(data, error, "get title");
  return data.category_name;
}
export async function galleries(categoryId) {
  const galleriesData = await client.fetch(serviceCategoriesQuery);

  const filtered = categoryId
    ? galleriesData.filter((card) => card.category?._id === categoryId)
    : galleriesData;

  return filtered.map((card) => ({
    id: card._id,
    title: card.title,
    categoryId: card.category?._id,
    categoryTitle: card.category?.title,
    cover_photo: card.cover_photo,
    eventDate: card.eventDate,
    galleryImages: card.galleryImages || [],
  }));
}

export async function getIdFromTitle(title) {
  const { data, error } = await getIdByTitle(title);
  if (error) {
    console.log(error, "getIdByTitle");
  }
  return { data };
}

const serviceCategoriesQuery = `*[_type == "gallerycards"]{
  _id,
  title,
  "cover_photo": bgImage.asset->url,
  eventDate,
  category->{
    title,
    _id
  },
  "galleryImages": galleryImages[]{
    "url": asset->url,
    "alt": asset->altText
  }
}`;
const queryFilter = `*[_type == "gallerycards" && _id == $filterId]{
  _id,
  title,
  "cover_photo": bgImage.asset->url,
  eventDate,
  category->{
    title,
    _id
  },
  description,
  "galleryImages": galleryImages[] {
    "url": asset->url,
    "alt": asset->altText
  }
}`;
export async function getGrids(filterId) {
  const galleriesData = await client.fetch(queryFilter, {
    filterId,
  });
  console.log(galleriesData, "grid from sanity");

  return galleriesData.map((card) => ({
    id: card._id,
    title: card.title,
    categoryId: card.category?._id,
    categoryTitle: card.category?.title,
    cover_photo: card.cover_photo,
    eventDate: card.eventDate,
    description: card.description,
    galleryImages: card.galleryImages || [],
  }));
}
