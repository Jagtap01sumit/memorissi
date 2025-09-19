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
        <div className="md:mb-4 mb-1 h-36 md:h-64 overflow-hidden rounded-xl">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
      )}

      <h3
        className="md:text-xl text-[18px] font-semibold md:mb-2 mb-1"
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
            } w-5 h-5 md:w-6 md:h-6`}
          />
        ))}
      </div>

      <p
        className=" md:mb-3 md:text-sm text-[10px]"
        style={{ text: COLORS.textPrimary }}
      >
        {review}
      </p>

      <p
        className="md:font-medium md:text-xs text-[10px]"
        style={{ text: COLORS.accent }}
      >
        - {name}
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
