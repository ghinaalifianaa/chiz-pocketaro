// Elemen dekoratif buat ngisi background yang kosong: blob, titik-titik, garis coretan.
// Ditaruh absolute di belakang konten (z-0), section pemanggil harus punya class "relative"
// dan konten utamanya dikasih "relative z-10" biar tetap di atas dekorasi ini.
export default function BackgroundDecor({ variant = "hero" }) {
  if (variant === "hero") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-10 -left-16 w-64 h-64 rounded-full bg-gold/20 blur-2xl" />
        <div className="absolute top-20 -right-20 w-72 h-72 rounded-full bg-brand/15 blur-2xl" />
        <span className="absolute bottom-10 left-[8%] text-xl text-brand/50">✦</span>
        <div className="absolute bottom-16 right-[10%] flex gap-2">
          <span className="w-2 h-2 rounded-full bg-brand/30" />
          <span className="w-2 h-2 rounded-full bg-gold/50" />
          <span className="w-2 h-2 rounded-full bg-brand/30" />
        </div>
      </div>
    );
  }

  if (variant === "soft") {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-gold/10 blur-2xl" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-brand/10 blur-2xl" />
        <span className="absolute top-8 left-[6%] text-xl text-gold/60">✦</span>
        <span className="absolute bottom-8 right-[8%] text-xl text-brand/40">✦</span>
      </div>
    );
  }

  return null;
}
