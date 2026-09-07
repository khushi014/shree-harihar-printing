import { Metadata } from "next";
import IndustryClientPage from "./IndustryClientPage";

const PAGE_TITLE = "Industries We Serve | Pharma, FMCG, F&B & Nutraceutical Packaging";
const PAGE_DESC = "Shree Harihar Printing Works LLP manufactures carton, label & promotional packaging for Pharmaceutical, FMCG, Personal Care, Food & Beverage, and Nutraceutical brands.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shreehariharprintingworks.com/industry",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    siteName: "Shree Harihar Printing Works LLP",
    images: [
      {
        url: "/images/pharma_carton_braille.jpg",
        width: 1200,
        height: 630,
        alt: "Pharmaceutical & FMCG Packaging by Shree Harihar Printing Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/pharma_carton_braille.jpg"],
  },
};

export default function IndustryPage() {
  return <IndustryClientPage />;
}
