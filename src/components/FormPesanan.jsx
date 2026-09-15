import { useState } from "react";

const NOMOR_WA = "6285796753396"; // nomor WhatsApp Chiz-Pocketaro

// Tinggal tambah/ubah baris di sini kalau mau ubah pilihan isian atau saus
const ISIAN_OPTIONS = [
  { value: "ayam", label: "Savory Chicken" },
  { value: "jagung", label: "Garlic Butter Corn" },
  { value: "tempe", label: "Tumis Jamur & Tempe" },
];

const SAUS_OPTIONS = [
  { value: "ranch", label: "Creamy Ranch Sauce" },
  { value: "hot", label: "Hot Sauce" },
];

const LOKASI_AMBIL_OPTIONS = [
  { value: "ftp", label: "FTP UGM" },
  { value: "feb", label: "FEB UGM" },
];

const HARGA_SATUAN = 10000; // harga per pcs, ganti kalau harga berubah

// Google Form buat nyimpen log pesanan otomatis ke spreadsheet (bukan buat diisi pelanggan)
const GFORM_ACTION_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScui1pHHrF20YQpbDiXnMUJIa-rNnIDg_r53ictKgiFKHoTLQ/formResponse";
const GFORM_ENTRY = {
  nama: "entry.454112372",
  detail: "entry.456355607",
  total: "entry.898599216",
  metodeAlamat: "entry.1511188342",
};

function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(angka);
}

function catatKeGoogleSheet({ nama, detail, total, metodeAlamat }) {
  const formData = new FormData();
  formData.append(GFORM_ENTRY.nama, nama);
  formData.append(GFORM_ENTRY.detail, detail);
  formData.append(GFORM_ENTRY.total, total);
  formData.append(GFORM_ENTRY.metodeAlamat, metodeAlamat);

  // mode "no-cors" karena Google Form tidak mengizinkan baca respons dari domain lain,
  // tapi datanya tetap sukses tercatat di spreadsheet
  fetch(GFORM_ACTION_URL, {
    method: "POST",
    mode: "no-cors",
    body: formData,
  }).catch(() => {
    // diamkan errornya - kalau gagal, pesanan tetap terkirim lewat WhatsApp seperti biasa
  });
}

const inputClass =
  "w-full border-2 border-ink rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gold";

let idCounter = 0;
function buatItemBaru() {
  idCounter += 1;
  return {
    id: idCounter,
    jumlah: 1,
    isian: ISIAN_OPTIONS[0].value,
    saus: SAUS_OPTIONS[0].value,
  };
}

export default function FormPesanan() {
  const [nama, setNama] = useState("");
  const [items, setItems] = useState([buatItemBaru()]);
  const [metode, setMetode] = useState("ambil");
  const [lokasiAmbil, setLokasiAmbil] = useState(LOKASI_AMBIL_OPTIONS[0].value);
  const [alamat, setAlamat] = useState("");

  function updateItem(id, field, value) {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  }

  function tambahItem() {
    setItems((prev) => [...prev, buatItemBaru()]);
  }

  function hapusItem(id) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  function hitungTotal() {
    return items.reduce((total, item) => total + (Number(item.jumlah) || 0) * HARGA_SATUAN, 0);
  }

  function buatLinkWhatsApp() {
    const daftarItem = items
      .map((item, i) => {
        const namaIsian = ISIAN_OPTIONS.find((o) => o.value === item.isian)?.label;
        const namaSaus = SAUS_OPTIONS.find((o) => o.value === item.saus)?.label;
        return `${i + 1}. ${item.jumlah}x Chiz-Pocketaro - Isian: ${namaIsian}, Saus: ${namaSaus}`;
      })
      .join("\n");

    const baris = [
      `Halo, saya ingin memesan Chiz-Pocketaro:`,
      `Nama: ${nama}`,
      daftarItem,
      `Total: ${formatRupiah(hitungTotal())}`,
      `Metode: ${metode === "ambil" ? "Ambil langsung" : "Diantar"}`,
    ];
    if (metode === "ambil") {
      const namaLokasi = LOKASI_AMBIL_OPTIONS.find((o) => o.value === lokasiAmbil)?.label;
      baris.push(`Lokasi ambil: ${namaLokasi}`);
    }
    if (metode === "antar") {
      baris.push(`Alamat: ${alamat}`);
    }
    return `https://wa.me/${NOMOR_WA}?text=${encodeURIComponent(baris.join("\n"))}`;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const daftarItem = items
      .map((item, i) => {
        const namaIsian = ISIAN_OPTIONS.find((o) => o.value === item.isian)?.label;
        const namaSaus = SAUS_OPTIONS.find((o) => o.value === item.saus)?.label;
        return `${i + 1}. ${item.jumlah}x Chiz-Pocketaro - Isian: ${namaIsian}, Saus: ${namaSaus}`;
      })
      .join("\n");
    const metodeAlamatText =
      metode === "ambil"
        ? `Ambil langsung - ${LOKASI_AMBIL_OPTIONS.find((o) => o.value === lokasiAmbil)?.label}`
        : `Diantar - ${alamat}`;

    catatKeGoogleSheet({
      nama,
      detail: daftarItem,
      total: formatRupiah(hitungTotal()),
      metodeAlamat: metodeAlamatText,
    });

    window.open(buatLinkWhatsApp(), "_blank");
  }

  return (
    <section id="pesan" className="px-6 py-20 max-w-md mx-auto">
      <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-2 text-center">
        Pesan Sekarang
      </h2>
      <p className="text-stone-600 text-sm text-center mb-8">
        Mau pesan beberapa rasa atau saus sekaligus? Tambah pilihan di bawah.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white border-2 border-ink rounded-2xl p-6">
        <div>
          <label className="block text-sm font-bold mb-1">Nama</label>
          <input
            type="text"
            required
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className={inputClass}
          />
        </div>

        <div className="space-y-4">
          {items.map((item, i) => (
            <div key={item.id} className="border-2 border-ink rounded-xl p-4 relative bg-cream/50">
              <div className="flex items-center justify-between mb-3">
                <span className="font-display font-bold text-sm text-brand-dark">
                  Pilihan {i + 1}
                </span>
                {items.length > 1 && (
                  <button
                    type="button"
                    onClick={() => hapusItem(item.id)}
                    className="text-xs font-bold text-brand hover:text-brand-dark"
                  >
                    Hapus
                  </button>
                )}
              </div>
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold mb-1">Jumlah</label>
                  <input
                    type="number"
                    min="1"
                    value={item.jumlah}
                    onChange={(e) => updateItem(item.id, "jumlah", e.target.value)}
                    className={inputClass}
                  />
                  <p className="text-xs text-brand font-bold mt-1">
                    Subtotal: {formatRupiah((Number(item.jumlah) || 0) * HARGA_SATUAN)}
                  </p>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Isian</label>
                  <select
                    value={item.isian}
                    onChange={(e) => updateItem(item.id, "isian", e.target.value)}
                    className={inputClass}
                  >
                    {ISIAN_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1">Saus</label>
                  <select
                    value={item.saus}
                    onChange={(e) => updateItem(item.id, "saus", e.target.value)}
                    className={inputClass}
                  >
                    {SAUS_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={tambahItem}
          className="w-full border-2 border-dashed border-brand text-brand font-bold py-2 rounded-xl hover:bg-purple-tint transition-colors"
        >
          + Tambah Pilihan Rasa/Saus Lain
        </button>

        <div>
          <label className="block text-sm font-bold mb-2">Metode</label>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setMetode("ambil")}
              className={`py-2.5 rounded-xl border-2 font-bold text-sm transition-colors ${
                metode === "ambil"
                  ? "bg-brand text-white border-ink"
                  : "bg-white text-stone-500 border-stone-300"
              }`}
            >
              Ambil langsung
            </button>
            <button
              type="button"
              onClick={() => setMetode("antar")}
              className={`py-2.5 rounded-xl border-2 font-bold text-sm transition-colors ${
                metode === "antar"
                  ? "bg-brand text-white border-ink"
                  : "bg-white text-stone-500 border-stone-300"
              }`}
            >
              Diantar
            </button>
          </div>
          {metode === "antar" && (
            <p className="text-xs text-stone-500 mt-2">
              Gratis ongkir di area UGM. Di luar area UGM, tambahan Rp1.000/km.
            </p>
          )}
        </div>
        {metode === "ambil" && (
          <div className="bg-purple-tint border-2 border-brand rounded-xl p-3">
            <label className="block text-sm font-bold mb-1">
              ↳ Lokasi ambil
            </label>
            <select
              value={lokasiAmbil}
              onChange={(e) => setLokasiAmbil(e.target.value)}
              className={inputClass}
            >
              {LOKASI_AMBIL_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        )}
        {metode === "antar" && (
          <div className="bg-purple-tint border-2 border-brand rounded-xl p-3">
            <label className="block text-sm font-bold mb-1">↳ Alamat</label>
            <textarea
              required
              value={alamat}
              onChange={(e) => setAlamat(e.target.value)}
              rows={3}
              placeholder="Nama jalan, nomor rumah, patokan..."
              className={inputClass}
            />
          </div>
        )}
        <div className="flex items-center justify-between border-t-2 border-ink pt-4">
          <span className="font-display font-bold text-brand-dark">Total</span>
          <span className="font-display font-extrabold text-xl text-brand-dark">
            {formatRupiah(hitungTotal())}
          </span>
        </div>
        <p className="text-xs text-stone-500 text-center">
          Pembayaran dilakukan setelah admin mengonfirmasi pesananmu via WhatsApp.
        </p>
        <button
          type="submit"
          className="w-full bg-brand text-white font-bold py-3 rounded-full border-2 border-ink shadow-[4px_4px_0_#161116] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#161116] transition-all"
        >
          Kirim pesanan ke WhatsApp
        </button>
      </form>
    </section>
  );
}
