import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeExperience } from "@/components/HomeExperience";

export default function Home() {
  return (
    <>
      <Header />
      <div aria-hidden="true" className="h-[4.5rem]" />
      <main>
        <HomeExperience />
      </main>
      <Footer />
    </>
  );
}
