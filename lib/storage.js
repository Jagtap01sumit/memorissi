import { supabase } from "./supabaseClient";

export const getPublicUrl = (bucket, path) => {
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
};
export async function getPublicFilesFromFolder(bucketName, folder) {
  try {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .list(folder, { limit: 100, offset: 0 });
    if (error) throw error;

    if (!data || data.length === 0) return [];
    return data
      .filter((file) => file.id)
      .map((file) => {
        const filePath = `${folder}/${file.name}`;
        return getPublicUrl(bucketName, filePath);
      });
  } catch (err) {
    console.error("Error fetching public files:", err.message);
    return [];
  }
}

export async function getAllDataFromTable(tableName) {
  const { data, error } = await supabase.from(tableName).select("*");
  console.log(data, error, " get all data from table");

  return { data };
}
export async function getTitleById(id) {
  const { data, error } = await supabase
    .from("Categories")
    .select("category_name")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error, "error");
    return null;
  }

  return { data };
}

export async function getIdByTitle(title) {
  const { data, error } = await supabase
    .from("Categories")
    .select("id")
    .eq("category_name", title.toUpperCase())
    .single();

  if (error) {
    console.log("ERROR:", error);
  }
  return { data };
}
