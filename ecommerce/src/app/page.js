import Image from "next/image";
import Header from "./components/common/Header";
import BannerSection from "./components/home-components/BannerSection";
import Footer from "./components/common/Footer";
import LatestProd from "./components/home-components/LatestProd";
export default function Home() {
  return (
    <>
      <BannerSection />
      <LatestProd />
    </>
  );
}
