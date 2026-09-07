import { Metadata } from "next";
import GalleryClientPage from "./GalleryClientPage";

const PAGE_TITLE = "Our Work | Carton, Label & Packaging Print Gallery | Shree Harihar Printing Works";
const PAGE_DESC = "Browse real carton, label, and promotional print work by Shree Harihar Printing Works LLP – pharma packaging, FMCG cartons, labels, and promotional collateral.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shreehariharprintingworks.com/gallery",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    siteName: "Shree Harihar Printing Works LLP",
    images: [
      {
        url: "/images/fmcg_cosmetic_cartons.jpg",
        width: 1200,
        height: 630,
        alt: "Print Gallery – Cartons & Labels by Shree Harihar Printing Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/fmcg_cosmetic_cartons.jpg"],
  },
};

export default function GalleryPage() {
  return <GalleryClientPage />;
}
