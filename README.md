This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

# ✅ Project Structure

├── .gitignore
├── README.md
├── app # Next.js App Router (all routes & layouts)
│ ├── about-us
│ │ └── page.jsx
│ ├── contact
│ │ └── page.jsx
│ ├── services
│ │ ├── [category]
│ │ │ ├── [filter]
│ │ │ │ └── page.jsx
│ │ │ └── page.jsx
│ │ └── page.jsx
│ ├── [slug]
│ │ └── page.jsx
│ ├── api # API routes
│ │ └── contact
│ │ └── route.js
│ ├── not-found.jsx
│ ├── layout.tsx
│ ├── page.jsx # Home page
│ └── globals.css
│
├── components # Reusable UI components
│ ├── common # Buttons, Modals, Loaders, etc.
│ │ ├── loaders
│ │ │ ├── CubicalLoader.jsx
│ │ │ ├── GridLoad.jsx
│ │ │ └── ImageLoader.jsx
│ │ └── OptimizedImage.jsx
│ ├── layout # Layout-specific (Navbar, Footer, etc.)
│ │ ├── Footer.jsx
│ │ └── Navbar.jsx
│ ├── sections # Page-specific sections
│ │ ├── Hero.jsx
│ │ ├── client-reviews
│ │ │ └── ClientTestimonials.js
│ │ ├── featured-story
│ │ │ └── FeaturedStory.js
│ │ ├── home-intro
│ │ │ └── HomeIntro.js
│ │ ├── service-section
│ │ │ └── ServiceSections.jsx
│ │ └── contact-form
│ │ └── ContactForm.jsx
│ ├── cards # Card-type components
│ │ ├── ServiceCard.jsx
│ │ ├── ReviewCard.jsx
│ │ ├── FullReviewCard.jsx
│ │ └── ReviewCarousel.jsx
│ ├── media # Galleries, sliders, reels
│ │ ├── ImageSlider.jsx
│ │ ├── PhotoGalleryGrid.jsx
│ │ └── Reel.jsx
│ └── about-us # About-us specific components
│ ├── FAQ.jsx
│ ├── AboutUsDetails.jsx
│ └── Contact.jsx
│
├── data # Static content / JSON-like configs
│ ├── AboutUsData.js
│ ├── ClientReview.js
│ ├── FeaturedStory.js
│ ├── FooterData.js
│ ├── HeroData.js
│ ├── NavLinks.js
│ ├── ServiceCardData.js
│ ├── ServiceCategory.js
│ └── SliderData.js
│
├── lib # External libraries, clients, utils
│ └── sanityClient.js
│
├── utils # Constants & helpers
│ ├── colors.js
│ ├── fonts.js
│ ├── media.js
│ └── index.js
│
├── public # Static assets
│ ├── images
│ │ ├── image.png
│ │ ├── image2.png
│ │ ├── image3.png
│ │ └── logo2.png
│ ├── videos
│ │ └── intro-video.mp4
│ ├── logo.png
│ ├── favicon.ico
│ └── icons
│ ├── file.svg
│ ├── globe.svg
│ ├── next.svg
│ └── window.svg
│
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── package.json
└── package-lock.json

## Email setupParsing ecmascript source code failed

1️⃣ Enable 2-Step Verification

Go to Google Account Security
.

Enable 2-Step Verification (if not already enabled).

2️⃣ Create an App Password

Go to App Passwords
.

Under Select app, choose Mail.

Under Select device, choose Other and name it e.g., Next.js Contact Form.

Click Generate.

You’ll get a 16-character password.

###
