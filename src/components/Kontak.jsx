import BackgroundDecor from "./BackgroundDecor.jsx";

const NOMOR_WA = "6285796753396"; // nomor WhatsApp Chiz-Pocketaro

const pesanUmum = "Halo, saya mau tanya-tanya soal Chiz-Pocketaro.";
const linkWhatsApp = `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(pesanUmum)}`;

export default function Kontak() {
  return (
    <section className="relative px-6 py-16 bg-purple-tint overflow-hidden">
      <BackgroundDecor variant="soft" />
      <div className="relative z-10 max-w-md mx-auto text-center">
        <h2 className="font-display font-extrabold uppercase text-2xl text-brand-dark mb-2">
          Ada Pertanyaan?
        </h2>
        <p className="text-stone-600 mb-8">
          Mau tanya soal rasa, bahan, atau hal lain seputar Chiz-Pocketaro?
          Chat aja, kami siap bantu jawab.
        </p>
        <a
          href={linkWhatsApp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-full border-2 border-ink shadow-[4px_4px_0_#161116] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#161116] transition-all"
        >
          Chat via WhatsApp
        </a>
      </div>
    </section>
  );
}
