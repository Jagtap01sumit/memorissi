import { getPublicFilesFromFolder } from "@/lib/storage";

export async function fetchSliderImages() {
  try {
    const images = await getPublicFilesFromFolder(
      process.env.NEXT_PUBLIC_MAIN_BUCKET,
      process.env.NEXT_PUBLIC_FOLDER_FOR_SLIDER
    );

    console.log("Fetched slider images:", images);
    return images;
  } catch (err) {
    console.error("Error fetching slider images:", err.message);
    return [];
  }
}
