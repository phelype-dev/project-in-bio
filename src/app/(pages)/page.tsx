import Image from "next/image";
import Hero from "@/app/components/lading-page/hero";
import Header from "../components/lading-page/header";
import VideoExplanation from "../components/lading-page/video-explanation";
import Pricing from "../components/lading-page/pricing";
import FAQ from "../components/lading-page/faq";

export default function Home() {
  return (
    <div className={"max-w-7xl mx-auto"}>

      <Hero />
      <Header />
      <VideoExplanation />
      <Pricing />
      <FAQ />
    </div>
  );
}
