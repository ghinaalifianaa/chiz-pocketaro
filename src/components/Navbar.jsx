import { useState } from "react";

const navLinks = [
  { href: "#cerita", label: "Jejak Rasa" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#bahan", label: "Bahan" },
  { href: "#proses", label: "Proses" },
  { href: "#produk", label: "Harga" },
  { href: "#cara-pesan", label: "Cara Pesan" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="px-4 pt-4">
      <nav className="max-w-3xl mx-auto bg-brand-dark border-2 border-ink rounded-3xl md:rounded-full shadow-[4px_4px_0_#161116]">
        <div className="flex items-center justify-between gap-4 px-6 py-3">
          <a href="#beranda" className="font-display font-bold text-cream text-lg tracking-wide">
            Chiz-Pocketaro
          </a>
          <ul className="hidden md:flex gap-5 text-sm text-cream/90 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <a
              href="#pesan"
              className="bg-gold text-ink text-sm font-bold px-4 py-2 rounded-full border-2 border-ink whitespace-nowrap"
            >
              Pesan
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-cream border-2 border-ink rounded-full w-9 h-9 flex items-center justify-center shrink-0"
              aria-label="Buka menu"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>
        {open && (
          <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 text-sm text-cream/90 font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </div>
  );
}
