import BackgroundDecor from "./BackgroundDecor.jsx";

export default function CeritaKami() {
  return (
    <section id="cerita" className="relative px-6 py-20 bg-purple-tint overflow-hidden">
      <BackgroundDecor variant="soft" />

      {/* Layout HP: badge -> judul -> foto -> paragraf */}
      <div className="relative z-10 max-w-4xl mx-auto md:hidden">
        <span className="inline-block bg-gold border-2 border-ink rounded-full px-4 py-1 text-xs font-bold text-ink mb-4">
          Jejak Rasa
        </span>
        <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-6">
          Bahan Lokal yang Selama Ini Terlewat
        </h2>
        <img
          src="/isian-garlic-butter-corn.png"
          alt="Chiz-Pocketaro"
          className="border-2 border-ink rounded-3xl rotate-1 w-full aspect-square object-cover mb-6"
        />
        <p className="text-stone-600 leading-relaxed mb-4">
          Indonesia kaya akan sumber energi dan gizi dari pangan lokal. Talas
          adalah salah satunya, bahan yang akrab tapi jarang tampil sebagai
          camilan utama. Dari situ, Chiz-Pocketaro lahir: stuffed pocket berbahan talas isi
          keju leleh yang mengangkat bahan lokal ke dalam bentuk yang lebih
          modern dan mudah dinikmati.
        </p>
        <p className="text-stone-600 leading-relaxed">
          Chiz-Pocketaro dikembangkan dalam Djoeragan Pangan Competition
          2026, dengan tiga pilihan isian dan dua pilihan saus cocolan yang
          bisa kamu sesuaikan dengan selera.
        </p>
      </div>

      {/* Layout desktop: foto kiri, teks kanan */}
      <div className="relative z-10 max-w-4xl mx-auto hidden md:grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/isian-garlic-butter-corn.png"
          alt="Chiz-Pocketaro"
          className="border-2 border-ink rounded-3xl rotate-1 w-full aspect-square object-cover"
        />
        <div>
          <span className="inline-block bg-gold border-2 border-ink rounded-full px-4 py-1 text-xs font-bold text-ink mb-4">
            Jejak Rasa
          </span>
          <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-4">
            Bahan Lokal yang Selama Ini Terlewat
          </h2>
          <p className="text-stone-600 leading-relaxed mb-4">
            Indonesia kaya akan sumber energi dan gizi dari pangan lokal. Talas
            adalah salah satunya, bahan yang akrab tapi jarang tampil sebagai
            camilan utama. Dari situ, Chiz-Pocketaro lahir: stuffed pocket berbahan talas isi
            keju leleh yang mengangkat bahan lokal ke dalam bentuk yang lebih
            modern dan mudah dinikmati.
          </p>
          <p className="text-stone-600 leading-relaxed">
            Chiz-Pocketaro dikembangkan dalam Djoeragan Pangan Competition
            2026, dengan tiga pilihan isian dan dua pilihan saus cocolan yang
            bisa kamu sesuaikan dengan selera.
          </p>
        </div>
      </div>
    </section>
  );
}
