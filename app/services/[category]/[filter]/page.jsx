import { getGalleryById } from "@/app/data/ServiceCategory";
import GalleryView from "../../../components/PhotoGallaryGrid";
export default function Gallery({ params }) {
  const gallery = getGalleryById(params.filter);

  return <GalleryView gallery={gallery} />;
}
