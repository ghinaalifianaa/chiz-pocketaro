import BackgroundDecor from "./BackgroundDecor.jsx";

const langkah = [
  {
    judul: "Pilih isian dan saus",
    deskripsi:
      "Lihat pilihan isian dan saus cocolan di bagian Bahan, tentukan favoritmu.",
  },
  {
    judul: "Isi form pesanan",
    deskripsi:
      "Isi nama, jumlah, isian, saus, dan metode pengambilan di form pemesanan.",
  },
  {
    judul: "Kirim ke WhatsApp",
    deskripsi:
      "Klik tombol kirim, pesan otomatis tersusun dan terkirim ke WhatsApp admin.",
  },
  {
    judul: "Tunggu konfirmasi admin",
    deskripsi:
      "Admin akan mengonfirmasi ketersediaan, detail pembayaran, dan biaya ongkir (jika diantar).",
  },
  {
    judul: "Bayar dan tunggu pesanan",
    deskripsi:
      "Setelah pembayaran dikonfirmasi, ambil di lokasi pilihan (FTP/FEB UGM) atau tunggu diantar.",
  },
];

export default function CaraPesan() {
  return (
    <section id="cara-pesan" className="relative px-6 py-20 bg-white overflow-hidden">
      <BackgroundDecor variant="soft" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-10 text-center">
          Cara Pesan
        </h2>
        <ol className="space-y-8">
          {langkah.map((l, i) => (
            <li key={l.judul} className="flex gap-4">
              <span className="shrink-0 w-8 h-8 rounded-full bg-brand text-white font-semibold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-medium mb-1">{l.judul}</h3>
                <p className="text-stone-600 text-sm">{l.deskripsi}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
