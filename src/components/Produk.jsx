import BackgroundDecor from "./BackgroundDecor.jsx";

const produkList = [
  {
    nama: "Chiz-Pocketaro Satuan",
    deskripsi: "1 pcs, pilih isian favoritmu, sudah termasuk 1 cup saus pilihan",
    harga: "Rp 10.000",
  },
];

export default function Produk() {
  return (
    <section id="produk" className="relative px-6 py-20 bg-purple-tint overflow-hidden">
      <BackgroundDecor variant="soft" />
      <div className="relative z-10 max-w-sm mx-auto">
        <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-8 text-center">
          Harga
        </h2>
        <div className="grid gap-6">
          {produkList.map((p) => (
            <div
              key={p.nama}
              className="relative bg-white border-2 border-ink rounded-2xl p-6 text-center"
            >
              <span className="absolute -top-4 -right-4 bg-gold border-2 border-ink rounded-full px-4 py-2 font-display font-bold text-ink text-sm">
                {p.harga}
              </span>
              <h3 className="font-medium text-lg mb-1 mt-2">{p.nama}</h3>
              <p className="text-stone-500 text-sm">{p.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
