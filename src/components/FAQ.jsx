import BackgroundDecor from "./BackgroundDecor.jsx";

const faqList = [
  {
    q: "Bagaimana cara pemesanan bekerja?",
    a: "Isi form di atas, lalu pesananmu otomatis terkirim sebagai pesan WhatsApp ke admin. Admin akan konfirmasi ketersediaan dan detail pembayaran.",
  },
  {
    q: "Bisa pilih isian dan saus apa saja?",
    a: "Ada 3 pilihan isian (Savory Chicken, Garlic Butter Corn, Tumis Jamur & Tempe) dan 2 pilihan saus (Creamy Ranch Sauce, Hot Sauce). Pilih langsung di form pesanan di atas.",
  },
  {
    q: "Bisa pesan beberapa rasa atau saus sekaligus?",
    a: "Bisa! Di form pesanan, klik 'Tambah Pilihan Rasa/Saus Lain' untuk memesan beberapa kombinasi isian dan saus dalam satu pesanan.",
  },
  {
    q: "Kalau pilih diantar, kena ongkir?",
    a: "Pengiriman di area UGM gratis ongkir. Untuk lokasi di luar area UGM, dikenakan biaya tambahan Rp1.000 per km.",
  },
];

export default function FAQ() {
  return (
    <section className="relative px-6 py-20 bg-gold-tint overflow-hidden">
      <BackgroundDecor variant="soft" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-10 text-center">
          Pertanyaan Umum
        </h2>
        <div className="space-y-5">
          {faqList.map((item) => (
            <div key={item.q} className="bg-white border-2 border-ink rounded-2xl p-5">
              <h3 className="font-display font-bold mb-1">{item.q}</h3>
              <p className="text-stone-600 text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
