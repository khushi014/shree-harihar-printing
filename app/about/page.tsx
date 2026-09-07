import { Metadata } from "next";
import AboutClientPage from "./AboutClientPage";

const PAGE_TITLE = "About Shree Harihar Printing Works LLP | 5th-Generation Printing Since 1921";
const PAGE_DESC = "From 1921 to today, the story, values, and in-house machinery behind Shree Harihar Printing Works LLP, a 5th-generation carton & label manufacturer in Ahmedabad.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shreehariharprintingworks.com/about",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    siteName: "Shree Harihar Printing Works LLP",
    images: [
      {
        url: "/images/legacy_craftsmanship.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Harihar Printing Works – 5th Generation Legacy Since 1921",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/legacy_craftsmanship.jpg"],
  },
};

export default function AboutPage() {
  return <AboutClientPage />;
}
