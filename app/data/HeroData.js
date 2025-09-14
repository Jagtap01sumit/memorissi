import { client } from "@/lib/sanityClient";
import { notFound } from "next/navigation";

const heroQuery = `*[_type == "hero"]{
  _id,
  Home_Intro_Para,
  Home_Intro_Title,
  Paragraph,
  Title,
  logo,
heroImage->{
    name,
    "url": image.asset->url
  }
}`;
export async function fetchHeroBySlug(slug) {
  try {
    if (!slug) {
      return;
    }
    const query = `
      *[_type == "page" && slug.current == $slug][0]{
        title,
        "heroImage": hero.image.asset->url,
        "heroHeading": hero.heading,
        "heroParagraph": hero.paragraph,
        "heroIntroTitle": hero.introTitle,
        "heroIntroPara": hero.introPara
      }
    `;
    console.log(slug, "fetchherodataslug");
    const data = await client.fetch(query, { slug });

    console.log(data, "hero data");
    return data;
  } catch (error) {
    console.error("Error fetching hero:", error);
    return null;
  }
}

const navbarQuery = `*[_type == "navbar"][0]{
  leftLinks,
  "logo": logo.asset->url,
  rightLinks
}`;
export async function fetchNavbar() {
  try {
    const navbarData = await client.fetch(navbarQuery);

    if (!navbarData) return null;

    return {
      logo: navbarData.logo,
      leftLinks: navbarData.leftLinks || [],
      rightLinks: navbarData.rightLinks || [],
    };
  } catch (err) {
    console.error("Error fetching navbar data:", err.message);
    return null;
  }
}
