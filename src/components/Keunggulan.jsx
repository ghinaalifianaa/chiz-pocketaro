import BackgroundDecor from "./BackgroundDecor.jsx";

const keunggulan = [
  {
    judul: "Healthier Alternative",
    deskripsi: "Talas menggantikan kentang, MOCAF-tapioka menggantikan terigu (gluten-free), dengan varian tinggi protein dan serat.",
  },
  {
    judul: "Local Innovation",
    deskripsi: "Mendukung diversifikasi pangan lokal lewat talas, MOCAF, dan tempe.",
  },
  {
    judul: "Practical Meal",
    deskripsi: "Mengenyangkan tapi tetap praktis, cocok dikonsumsi di sela aktivitas padat mahasiswa.",
  },
  {
    judul: "Flavorful Experience",
    deskripsi: "Varian isi dan saus beragam, membentuk pengalaman kombinasi rasa yang baru.",
  },
  {
    judul: "Accessible Value",
    deskripsi: "Mudah dijangkau lewat penjualan on-site dan Pre-Order, dengan harga sesuai target mahasiswa.",
  },
];

export default function Keunggulan() {
  return (
    <section id="keunggulan" className="relative px-6 py-20 bg-cream overflow-hidden">
      <BackgroundDecor variant="soft" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-10 text-center">
          Kenapa Chiz-Pocketaro?
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {keunggulan.map((item) => (
            <div key={item.judul} className="bg-white border-2 border-ink rounded-2xl p-5 text-center">
              <h3 className="font-display font-bold text-brand-dark mb-2">{item.judul}</h3>
              <p className="text-stone-600 text-sm">{item.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
