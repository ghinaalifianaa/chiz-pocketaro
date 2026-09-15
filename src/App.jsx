import Hero from "./components/Hero.jsx";
import CeritaKami from "./components/CeritaKami.jsx";
import Keunggulan from "./components/Keunggulan.jsx";
import Bahan from "./components/Bahan.jsx";
import Proses from "./components/Proses.jsx";
import Produk from "./components/Produk.jsx";
import CaraPesan from "./components/CaraPesan.jsx";
import FAQ from "./components/FAQ.jsx";
import FormPesanan from "./components/FormPesanan.jsx";
import Kontak from "./components/Kontak.jsx";
import Feedback from "./components/Feedback.jsx";
import Footer from "./components/Footer.jsx";
import BackToTop from "./components/BackToTop.jsx";

export default function App() {
  return (
    <main className="font-body text-stone-800 bg-cream">
      <Hero />
      <CeritaKami />
      <Keunggulan />
      <Bahan />
      <Proses />
      <Produk />
      <CaraPesan />
      <FormPesanan />
      <FAQ />
      <Kontak />
      <Feedback />
      <Footer />
      <BackToTop />
    </main>
  );
}
