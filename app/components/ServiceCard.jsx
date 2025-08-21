import Link from "next/link";

const ServiceCard = ({ title, image, icon }) => {
  const slug = title.toLowerCase();
  return (
    <Link href={`/services/${slug}`}>
      <div className="relative h-40 md:w-64 md:h-80 overflow-hidden rounded-lg shadow-lg cursor-pointer group">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 ease-in-out filter blur-[1px] group-hover:blur-0"
          />
        ) : null}

        <div className="absolute inset-0 bg-[#2A2139]/70 transition-all duration-500 group-hover:bg-transparent ">
          <div className="mb-2">{icon}</div>
          <h3 className=" text-sm md:text-xl font-serif">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
