import { Metadata } from "next";
import IndustryClientPage from "./IndustryClientPage";

export const metadata: Metadata = {
  title: "Industries We Serve | Pharma, FMCG, F&B & Nutraceutical Packaging",
  description: "Shree Harihar Printing Works LLP manufactures carton, label & promotional packaging for Pharmaceutical, FMCG, Personal Care, Food & Beverage, and Nutraceutical brands.",
};

export default function IndustryPage() {
  return <IndustryClientPage />;
}
