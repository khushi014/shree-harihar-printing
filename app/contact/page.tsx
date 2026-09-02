import { Metadata } from "next";
import ContactClientPage from "./ContactClientPage";

export const metadata: Metadata = {
  title: "Contact Us | Shree Harihar Printing Works LLP | Ahmedabad",
  description: "Get in touch with Shree Harihar Printing Works LLP for carton, label, or promotional printing inquiries. Request a quote or speak to our team in Ahmedabad directly.",
};

export default function ContactPage() {
  return <ContactClientPage />;
}
