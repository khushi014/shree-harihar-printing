import { Metadata } from "next";
import ServicesClientPage from "./ServicesClientPage";

export const metadata: Metadata = {
  title: "Our Services | Carton, Label & Promotional Printing | Shree Harihar Printing Works",
  description: "Explore our carton printing, sticker & label printing, and promotional print services, all produced in-house on Heidelberg & Bobst machinery since 1921.",
};

export default function ServicesPage() {
  return <ServicesClientPage />;
}
