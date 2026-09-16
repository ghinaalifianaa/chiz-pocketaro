import BackgroundDecor from "./BackgroundDecor.jsx";
import Navbar from "./Navbar.jsx";
import StatusPO from "./StatusPO.jsx";

export default function Hero() {
  return (
    <section id="beranda" className="relative pb-24 overflow-hidden">
      <BackgroundDecor variant="hero" />
      <div className="relative z-10">
        <StatusPO />
        <Navbar />
        <div className="px-6 pt-12 max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block bg-gold border-2 border-ink rounded-full px-4 py-1 text-sm font-bold text-ink mb-6">
              To-taro-ly Delicious
            </span>
            <h1 className="font-display font-extrabold uppercase text-4xl md:text-5xl leading-[1.1] text-brand-dark mb-6">
              Chiz-Pocketaro,
              <br />
              camilan talas isi keju
            </h1>
            <p className="text-stone-600 mb-8 max-w-sm">
              Patty talas dengan keju leleh dan isian gurih pilihanmu,
              disajikan hangat dengan saus cocolan.
            </p>
            <a
              href="#pesan"
              className="inline-flex items-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-full border-2 border-ink shadow-[4px_4px_0_#161116] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#161116] transition-all"
            >
              Pesan Sekarang
            </a>
          </div>
          <div className="relative">
            <img
              src="/hero-utama.png"
              alt="Chiz-Pocketaro"
              className="border-2 border-ink rounded-3xl -rotate-2 w-full aspect-square object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
