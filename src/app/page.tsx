"use client";

import ScrollProgress from "@/components/ScrollProgress/ScrollProgress";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import SignatureStyles from "@/components/SignatureStyles/SignatureStyles";
import ArtistDNA from "@/components/ArtistDNA/ArtistDNA";
import HowItWorks from "@/components/HowItWorks/HowItWorks";
import Portfolio from "@/components/Portfolio/Portfolio";
import Testimonials from "@/components/Testimonials/Testimonials";
import FAQ from "@/components/FAQ/FAQ";
import Pricing from "@/components/Pricing/Pricing";
import PiercingCourse from "@/components/PiercingCourse/PiercingCourse";
import StudioInfo from "@/components/StudioInfo/StudioInfo";
import Newsletter from "@/components/Newsletter/Newsletter";
import Footer from "@/components/Footer/Footer";
import StemDivider from "@/components/StemDivider/StemDivider";
import BookingModal from "@/components/BookingModal/BookingModal";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <SignatureStyles />
        <ArtistDNA />
        <HowItWorks />
        <StemDivider />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <PiercingCourse />
        <FAQ />
        <StudioInfo />
        <Newsletter />
      </main>
      <Footer />
      <BookingModal />
    </>
  );
}
