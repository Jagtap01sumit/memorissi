import { getPublicUrl } from "@/lib/storage";

export async function fetchHeroImage() {
  try {
    const url = await getPublicUrl(
      process.env.NEXT_PUBLIC_MAIN_BUCKET,
      `${process.env.NEXT_PUBLIC_FOLDER_FOR_HERO}Hero/hero.jpg`
    );
    console.log(url);
    return url;
  } catch (err) {
    console.error("Error fetching signed URL:", err.message);
    return null;
  }
}
export async function fetchLogo() {
  try {
    const url = await getPublicUrl(
      `${process.env.NEXT_PUBLIC_FOLDER_FOR_HERO}Hero/logo.png}`
    );
    console.log(url);
    return url;
  } catch (err) {
    console.error("Error fetching signed URL:", err.message);
    return null;
  }
}
