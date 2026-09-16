// ====== UBAH 3 BARIS INI TIAP GANTI PERIODE PO ======
export const PO_STATUS = "open"; // ganti jadi "closed" kalau PO sedang ditutup
export const PO_MULAI = "14 September 2026";
export const PO_SELESAI = "16 September 2026";
// =====================================================

export default function StatusPO() {
  const isOpen = PO_STATUS === "open";

  return (
    <div
      className={`text-center text-sm font-bold py-2 px-4 ${
        isOpen ? "bg-gold text-ink" : "bg-stone-700 text-white"
      }`}
    >
      {isOpen
        ? `PO Dibuka: ${PO_MULAI} - ${PO_SELESAI}`
        : "PO Sedang Ditutup — pantau Instagram @chiz.pocketaro untuk info PO berikutnya!"}
    </div>
  );
}
