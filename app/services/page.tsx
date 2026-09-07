import { Metadata } from "next";
import ServicesClientPage from "./ServicesClientPage";

const PAGE_TITLE = "Our Services | Carton, Label & Promotional Printing | Shree Harihar Printing Works";
const PAGE_DESC = "Explore our carton printing, sticker & label printing, and promotional print services, all produced in-house on Heidelberg & Bobst machinery since 1921.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shreehariharprintingworks.com/services",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    siteName: "Shree Harihar Printing Works LLP",
    images: [
      {
        url: "/images/folding_cartons_specimen.jpg",
        width: 1200,
        height: 630,
        alt: "Carton, Label & Promotional Printing Services by Shree Harihar Printing Works",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/folding_cartons_specimen.jpg"],
  },
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
