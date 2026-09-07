import { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

const PAGE_TITLE = "Contact Us | Shree Harihar Printing Works LLP | Ahmedabad";
const PAGE_DESC = "Get in touch with Shree Harihar Printing Works LLP for carton, label, or promotional printing inquiries. Request a quote or speak to our team in Ahmedabad directly.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.shreehariharprintingworks.com/contact",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    siteName: "Shree Harihar Printing Works LLP",
    images: [
      {
        url: "/images/modern_offset_press.jpg",
        width: 1200,
        height: 630,
        alt: "Shree Harihar Printing Works – Contact Our Ahmedabad Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/images/modern_offset_press.jpg"],
  },
};

export default function ContactPage() {
  return <ContactClientPage />;
}
