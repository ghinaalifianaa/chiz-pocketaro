import BackgroundDecor from "./BackgroundDecor.jsx";

const langkah = [
  {
    judul: "Menyiapkan adonan talas",
    deskripsi:
      "Talas dikukus dan dihaluskan, dicampur dengan sedikit tepung agar teksturnya pas untuk dibentuk.",
  },
  {
    judul: "Isi dan bentuk",
    deskripsi:
      "Adonan dipipihkan, diisi dengan pilihan isian dan keju leleh, lalu dibentuk menjadi patty bulat pipih.",
  },
  {
    judul: "Dipanggang hingga matang",
    deskripsi:
      "Chiz-Pocketaro dimasak di atas teflon dengan sedikit minyak hingga permukaannya kecoklatan dan keju di dalamnya meleleh sempurna.",
  },
  {
    judul: "Dikemas dan disajikan",
    deskripsi:
      "Chiz-Pocketaro dikemas hangat bersama pilihan saus cocolan, siap diantar atau diambil.",
  },
];

export default function Proses() {
  return (
    <section id="proses" className="relative px-6 py-20 bg-gold-tint overflow-hidden">
      <BackgroundDecor variant="soft" />
      <div className="relative z-10 max-w-2xl mx-auto">
        <h2 className="font-display font-extrabold uppercase text-3xl text-brand-dark mb-10 text-center">
          Cara Chiz-Pocketaro dibuat
        </h2>
        <ol className="space-y-5">
          {langkah.map((l, i) => (
            <li
              key={l.judul}
              className="flex gap-4 bg-white border-2 border-ink rounded-2xl p-5"
            >
              <span className="shrink-0 w-9 h-9 rounded-full bg-brand text-white border-2 border-ink font-display font-bold flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <h3 className="font-display font-bold mb-1">{l.judul}</h3>
                <p className="text-stone-600 text-sm">{l.deskripsi}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
