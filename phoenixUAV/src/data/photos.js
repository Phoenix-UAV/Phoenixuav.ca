// src/data/photos.js
// Photo gallery data & image paths

import PlaneWing from "../assets/images/teamPhotos/PlaneWing.png";
import Brainstorm from "../assets/images/teamPhotos/Brainstorm.png";
import AeroImg from "../assets/images/teamPhotos/A&P.png";
import PlaneLogo from "../assets/images/teamPhotos/planes&logo.png";
import Structures from "../assets/images/teamPhotos/Stuctures 1.png";
import WingHeld from "../assets/images/teamPhotos/WingHeld 1.png";

// Dynamically discover photo assets placed in public/photo-page/
const photoPageGlob = import.meta.glob("../../public/photo-page/*", {
  eager: true,
  query: "?url",
  import: "default",
});

const autoDiscoveredImages = Object.values(photoPageGlob);

// Preferred sequence of curated images
const curatedGalleryImages = [
  PlaneWing.src,
  Brainstorm.src,
  WingHeld.src,
  "/photo-page/QV2A9565.JPG",
  "/photo-page/QV2A9570.JPG",
  AeroImg.src,
  "/photo-page/20260910_212436.jpg",
  "/photo-page/20260915_173823.jpg",
  "/photo-page/QV2A9574.JPG",
  Structures.src,
  "/photo-page/IMG_1106.jpg",
  PlaneLogo.src,
  "/photo-page/IMG_8295.jpg",
  "/photo-page/IMG_1849.jpg",
];

// Helper to normalize image paths (strips query parameters like ?url)
const normalize = (path) => (typeof path === "string" ? path.split("?")[0] : path);

// Merge curated images with auto-discovered images and strictly remove all duplicates
const combinedImages = [
  ...curatedGalleryImages,
  ...autoDiscoveredImages,
];

export const galleryImages = Array.from(
  new Set(combinedImages.map((src) => normalize(src)))
);
