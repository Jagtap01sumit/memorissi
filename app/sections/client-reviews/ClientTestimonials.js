import ReviewCarousel from "@/app/components/ReviewCarousel";
import { getClientTestimonials } from "@/app/data/ClientReview";
export default async function ClientTestimonials({ slug }) {
  const cards = await getClientTestimonials(slug);

  return (
    <>
      {cards && (
        <div>
          {" "}
          <h5 className="text-sm text-gray-400 text-center">
            CLIENT TESTIMONIALS
          </h5>
          <h1 className="text-3xl font-serif mb-5 text-center">
            What Our Customers Say
          </h1>
          <ReviewCarousel cardData={cards.reviews} />
        </div>
      )}
    </>
  );
}
