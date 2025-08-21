import { getAllDataFromTable, getTitleById, getIdByTitle } from "@/lib/storage";

export async function getTitleByIdForCategory(id) {
  const { data, error } = await getTitleById(id);
  console.log(data, error, "get title");
  return data.category_name;
}
export async function galleries() {
  const { data } = await getAllDataFromTable(
    process.env.NEXT_PUBLIC_GALLERIES_TABLE
  );
  return { data };
}

export async function getIdFromTitle(title) {
  const { data, error } = await getIdByTitle(title);
  if (error) {
    console.log(error, "getIdByTitle");
  }
  return { data };
}
