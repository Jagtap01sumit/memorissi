import { client } from "@/lib/sanityClient";

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
export async function fetchHero() {
  try {
    const heroData = await client.fetch(heroQuery);

    if (!heroData || heroData.length === 0) return null;

    const hero = heroData[0];

    return {
      id: hero._id,
      title: hero.Title,
      introTitle: hero.Home_Intro_Title,
      introPara: hero.Home_Intro_Para,
      paragraph: hero.Paragraph,
      heroImage: hero.heroImage,
    };
  } catch (err) {
    console.error("Error fetching hero data:", err.message);
    return null;
  }
}

const logoQuery = `*[_type == "hero"]{
  "url": logo.asset->url
}`;

export async function fetchLogo() {
  try {
    const heroData = await client.fetch(logoQuery);

    if (!heroData || heroData.length === 0) return null;
    console.log(heroData.url, "logo data");
    return {
      url: heroData[0].url,
    };
  } catch (err) {
    console.error("Error fetching hero data:", err.message);
    return null;
  }
}
