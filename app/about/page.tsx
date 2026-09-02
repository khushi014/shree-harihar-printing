import { Metadata } from "next";
import AboutClientPage from "./AboutClientPage";

export const metadata: Metadata = {
  title: "About Shree Harihar Printing Works LLP | 5th-Generation Printing Since 1921",
  description: "From 1921 to today, the story, values, and in-house machinery behind Shree Harihar Printing Works LLP, a 5th-generation carton & label manufacturer in Ahmedabad.",
};

export default function AboutPage() {
  return <AboutClientPage />;
}
