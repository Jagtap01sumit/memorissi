import { client } from "@/lib/sanityClient";

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  hero {
    title,
    subtitle,
    "image": image.asset->url
  },
  me {
    name,
    title,
    description,
    "image": image.asset->url
  },
  journey {
    title,
    description
  },   
  showcases[] {
    title,
    description,
    "image": image.asset->url
  },
  contact {
    title,
    message,
    email,
    phone,
    location,
    socials[] {
      name,
      url
    }
  }
}`;

export async function getAboutPageData() {
  return await client.fetch(aboutPageQuery);
}

export const FAQSectionQuery = `*[_type == "faqPage"][0]{
  faqs[]{
    question,
    answer
  }
}`;

export async function getAFAQData() {
  console.log(await client.fetch(FAQSectionQuery), "FAQSectionQuery");
  const getFAQ = await client.fetch(FAQSectionQuery);
  return getFAQ.faqs;
}
