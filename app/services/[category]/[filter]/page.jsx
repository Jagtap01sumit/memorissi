import { getGalleryById } from "@/app/data/ServiceCategory";
import GalleryView from "../../../components/PhotoGallaryGrid";
import { Navbar } from "@/app/sections";
export default function Gallery({ params }) {
  const gallery = getGalleryById(params.filter);

  return (
    <>
      <Navbar />
      <div className="mt-20">
        <GalleryView gallery={gallery} />
      </div>
    </>
  );
}
