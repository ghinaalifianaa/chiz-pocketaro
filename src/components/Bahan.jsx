import BackgroundDecor from "./BackgroundDecor.jsx";

const bahanDasar = [
  { nama: "Talas", deskripsi: "Bahan utama, dikukus dan dihaluskan." },
  { nama: "MOCAF", deskripsi: "Tepung singkong bebas gluten, bikin tekstur adonan lebih kalis." },
  { nama: "Tapioka", deskripsi: "Menambah kekenyalan pada adonan talas." },
  { nama: "Keju leleh", deskripsi: "Isian yang meleleh gurih di setiap gigitan." },
];

const isianList = [
  { nama: "Savory Chicken", deskripsi: "Gurih, savory, dan kaya rasa dengan tekstur yang lembut." },
  { nama: "Garlic Butter Corn", deskripsi: "Gurih dengan aroma bawang putih dan sedikit rasa manis dari jagung." },
  { nama: "Tumis Jamur & Tempe", deskripsi: "Gurih dan umami dengan perpaduan rasa tempe, jamur, dan wortel." },
];

const sausList = [
  { nama: "Creamy Ranch Sauce", deskripsi: "Creamy, gurih, segar, dan sedikit asam dari jeruk." },
  { nama: "Hot Sauce", deskripsi: "Pedas, gurih, dengan sedikit sentuhan manis." },
];

export default function Bahan() {
  return (
    <section id="bahan" className="relative px-6 py-20 bg-cream overflow-hidden">
      <BackgroundDecor variant="soft" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-2 text-center">
          Racikan di Balik Chiz-Pocketaro
        </h2>
        <p className="text-stone-600 text-center mb-10">
          Talas, MOCAF, dan tapioka sebagai dasar adonan, dengan tiga pilihan
          isian dan dua pilihan saus cocolan yang bisa kamu sesuaikan dengan
          selera.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {bahanDasar.map((b) => (
            <div key={b.nama} className="bg-white border-2 border-ink rounded-2xl p-5">
              <h3 className="font-display font-bold mb-1">{b.nama}</h3>
              <p className="text-stone-500 text-sm">{b.deskripsi}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display font-bold text-xl text-brand-dark mb-6 text-center">
          Pilihan isian
        </h3>
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {isianList.map((isian) => (
            <div key={isian.nama} className="bg-white border-2 border-ink rounded-2xl p-5 text-center">
              <h4 className="font-display font-bold text-brand-dark mb-2">{isian.nama}</h4>
              <p className="text-stone-500 text-sm">{isian.deskripsi}</p>
            </div>
          ))}
        </div>

        <h3 className="font-display font-bold text-xl text-brand-dark mb-6 text-center">
          Pilihan saus cocolan
        </h3>
        <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
          {sausList.map((saus) => (
            <div key={saus.nama} className="bg-white border-2 border-ink rounded-2xl p-5 text-center">
              <h4 className="font-display font-bold text-brand-dark mb-2">{saus.nama}</h4>
              <p className="text-stone-500 text-sm">{saus.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
