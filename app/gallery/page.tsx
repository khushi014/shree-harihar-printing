import { Metadata } from "next";
import GalleryClientPage from "./GalleryClientPage";

export const metadata: Metadata = {
  title: "Our Work | Carton, Label & Packaging Print Gallery | Shree Harihar Printing Works",
  description: "Browse real carton, label, and promotional print work by Shree Harihar Printing Works LLP; pharma packaging, FMCG cartons, labels, and promotional collateral.",
};

export default function GalleryPage() {
  return <GalleryClientPage />;
}
