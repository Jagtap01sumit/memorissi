import { getPublicFilesFromFolder } from "@/lib/storage";

export async function fetchReelsData() {
  try {
    const reels = await getPublicFilesFromFolder(
      process.env.NEXT_PUBLIC_MAIN_BUCKET,
      process.env.NEXT_PUBLIC_FOLDER_FOR_REELS
    );

    console.log("Fetched reels from bucket to:", reels);
    return reels;
  } catch (err) {
    console.error("Error fetching reels videos", err.message);
    return [];
  }
}
