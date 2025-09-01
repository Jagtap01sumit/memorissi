import { Star } from "lucide-react";
import { COLORS } from "@/app/utils";
export default function ReviewCard({
  name,
  review,
  rating,
  image,
  title,
  link,
}) {
  return (
    <div
      className=" rounded-2xl shadow-md md:p-6 p-2 max-w-sm"
      style={{
        backgroundColor: COLORS.cardBackground,
        text: COLORS.textPrimary,
      }}
    >
      {image && (
        <div className="md:mb-4 mb-1">
          <img
            src={image}
            alt={name}
            className="w-full md:h-56 h-25 object-cover rounded-xl"
          />
        </div>
      )}

      <h3
        className="md:text-xl text-[8px] font-semibold md:mb-2 mb-1"
        style={{ text: COLORS.textSecondary }}
      >
        {title}
      </h3>

      <div className="flex items-center mb-1 md:mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`${
              i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
            } w-2 h-2 sm:w-5 sm:h-5 md:w-6 md:h-6`}
          />
        ))}
      </div>

      <p
        className=" md:mb-3 md:text-sm text-[7px]"
        style={{ text: COLORS.textPrimary }}
      >
        {review}
      </p>

      <p
        className="md:font-medium md:text-xs text-[6px]"
        style={{ text: COLORS.accent }}
      >
        {name}
      </p>

      {link && (
        <a
          href={link}
          className="text-blue-600 underline text-sm hover:text-blue-800"
        >
          Learn More
        </a>
      )}
    </div>
  );
}
