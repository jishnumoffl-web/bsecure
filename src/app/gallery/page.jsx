import Achievements from "@/components/gallery/Achievements";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import VideoGallery from "@/components/gallery/VideoGallery";

export default function Gallerypage() {
  return (
    <>
      <GalleryGrid />
      <VideoGallery />
      <Achievements />
    </>
  );
}
