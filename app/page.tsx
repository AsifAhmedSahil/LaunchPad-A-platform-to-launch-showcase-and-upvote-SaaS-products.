import FeaturedCard from "@/components/landing-page/featured-card";
import HeroSection from "@/components/landing-page/hero-section";
import RecentlyLaunched from "@/components/products/RecentlyLaunched";


export default function Home() {
  return (
    <div>
      <HeroSection/>

      <FeaturedCard/>

      <RecentlyLaunched/>
    </div>
  );
}
