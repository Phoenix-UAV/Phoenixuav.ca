// src/data/photos.js
// Photo gallery data & image paths

import PlaneWing from "../assets/images/teamPhotos/PlaneWing.png";
import Brainstorm from "../assets/images/teamPhotos/Brainstorm.png";
import AeroImg from "../assets/images/teamPhotos/A&P.png";
import PlaneLogo from "../assets/images/teamPhotos/planes&logo.png";
import Structures from "../assets/images/teamPhotos/Stuctures 1.png";
import WingHeld from "../assets/images/teamPhotos/WingHeld 1.png";

// Dynamically discover photo assets placed in public/photo-page/
const photoPageGlob = import.meta.glob("../../public/photo-page/*");

const autoDiscoveredImages = Object.keys(photoPageGlob).map((filePath) => {
  const filename = filePath.split("/").pop();
  return `/photo-page/${filename}`;
});

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

// Helper to extract a canonical identifier for each photo (by base filename)
const getImageKey = (src) => {
  if (typeof src !== "string") return String(src);
  const clean = src.split("?")[0].replace(/\\/g, "/");
  const filename = clean.split("/").pop() || clean;
  // Strip Vite asset hash if present (e.g. 'QV2A9565.Clr4R0MH.JPG' -> 'QV2A9565.JPG')
  const baseName = filename.replace(/\.[a-zA-Z0-9_-]{8}\./, ".");
  return baseName.toLowerCase();
};

// Merge curated images with auto-discovered images and strictly remove all duplicates
const combinedImages = [
  ...curatedGalleryImages,
  ...autoDiscoveredImages,
];

const seenKeys = new Set();
export const galleryImages = [];

for (const src of combinedImages) {
  if (!src) continue;
  const key = getImageKey(src);
  if (!seenKeys.has(key)) {
    seenKeys.add(key);
    galleryImages.push(src);
  }
}
