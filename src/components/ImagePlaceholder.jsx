// Placeholder ini menandai tempat foto. Setelah kamu punya file gambarnya:
// 1. Taruh file-nya di folder `public/` (contoh: public/hero.jpg)
// 2. Ganti pemanggilan <ImagePlaceholder label="..." /> jadi:
//    <img src="/hero.jpg" alt="..." className="rounded-lg w-full" />
export default function ImagePlaceholder({
  label = "Taruh foto di sini",
  aspect = "aspect-4/3",
  className = "",
}) {
  return (
    <div
      className={`${aspect} w-full bg-white flex items-center justify-center text-stone-400 text-sm px-4 text-center ${
        className || "rounded-lg border-2 border-dashed border-brand/30 bg-brand/5 text-brand/60"
      }`}
    >
      {label}
    </div>
  );
}
