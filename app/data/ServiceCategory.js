import { MEDIA } from "@/app/utils";

export const galleries = [
  {
    id: "001",
    category: "wedding",
    title: "Amit & Sneha",
    description: "A beautiful wedding in Udaipur",
    date: "2024-05-20",
    cover: MEDIA.serviceCard.img2,
    images: [
      {
        src: MEDIA.serviceCard.img2,
        description: "Wedding ceremony",
        date: "2024-05-20",
      },
      {
        src: `${MEDIA.slider.path}3.png`,
        description: "Haldi ceremony moments",
      },
      {
        src: MEDIA.serviceCard.img3,
        description: "Reception night glamour",
      },
      {
        src: MEDIA.serviceCard.img2,
        description: "Wedding ceremony",
        date: "2024-05-20",
      },
      {
        src: MEDIA.serviceCard.img2,
        description: "Wedding ceremony",
        date: "2024-05-20",
      },
      {
        src: MEDIA.serviceCard.img3,
        description: "Reception night glamour",
      },
      {
        src: `${MEDIA.slider.path}3.png`,
        description: "Haldi ceremony moments",
      },
      {
        src: MEDIA.serviceCard.img2,
        description: "Wedding ceremony",
        date: "2024-05-20",
      },
      {
        src: MEDIA.serviceCard.img3,
        description: "Reception night glamour",
      },
      {
        src: MEDIA.serviceCard.img3,
        description: "Reception night glamour",
      },
    ],
  },
  {
    id: "002",
    category: "wedding",
    title: "Rohit & Priya",
    description: "Traditional Maharashtrian wedding",
    date: "2024-02-14",
    cover: `${MEDIA.slider.path}3.png`,
    images: [
      {
        src: `${MEDIA.slider.path}1.png`,
        description: "Traditional wedding rituals",
      },
      {
        src: `${MEDIA.slider.path}2.png`,
        description: "Bride entry moment",
      },
    ],
  },
  {
    id: "003",
    category: "wedding",
    title: "Amit & Neha",
    description: "Destination wedding in Goa",
    date: "2023-12-10",
    cover: MEDIA.serviceCard.img3,
    images: [
      {
        src: MEDIA.serviceCard.img3,
        description: "Beachside wedding",
      },
      {
        src: MEDIA.serviceCard.img2,
        description: "Reception party",
      },
    ],
  },
  {
    id: "004",
    category: "commercial",
    title: "Product Shoot - XYZ",
    description: "Fashion product for brand XYZ",
    cover: MEDIA.serviceCard.img1,
    images: [
      {
        src: MEDIA.serviceCard.img1,
        description: "Fashion product photo",
      },
      {
        src: MEDIA.serviceCard.img2,
        description: "Catalog shot",
      },
    ],
  },
  {
    id: "005",
    category: "commercial",
    title: "Ad Campaign - ABC",
    description: "Commercial photography for ABC",
    cover: MEDIA.serviceCard.img2,
    images: [
      {
        src: MEDIA.serviceCard.img2,
        description: "Behind the scenes",
      },
    ],
  },
  {
    id: "006",
    category: "bts",
    title: "Behind the Scenes - Wedding",
    description: "Candid capture during wedding prep",
    cover: MEDIA.serviceCard.img1,
    images: [
      {
        src: MEDIA.serviceCard.img1,
        description: "Team preparing lighting setup",
      },
    ],
  },
  {
    id: "007",
    category: "bts",
    title: "Behind the Scenes - Commercial",
    description: "Lighting setup for fashion shoot",
    cover: MEDIA.serviceCard.img3,
    images: [
      {
        src: MEDIA.serviceCard.img3,
        description: "Model styling session",
      },
    ],
  },
  {
    id: "008",
    category: "bts",
    title: "Behind the Scenes - Photoshoot",
    description: "Model preparing for the shot",
    cover: MEDIA.serviceCard.img2,
    images: [
      {
        src: MEDIA.serviceCard.img2,
        description: "Camera setup moment",
      },
    ],
  },
];
// ServiceCategory.js
export const getGalleryById = (id) => {
  console.log(id);
  return galleries.find((g) => g.id === id);
};
