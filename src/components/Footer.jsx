const NOMOR_WA = "6285796753396";
const INSTAGRAM_HANDLE = "chiz.pocketaro";

const linkWhatsApp = `https://wa.me/${NOMOR_WA}`;
const linkInstagram = `https://instagram.com/${INSTAGRAM_HANDLE}`;

const navLinks = [
  { href: "#cerita", label: "Jejak Rasa" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#bahan", label: "Bahan" },
  { href: "#proses", label: "Proses" },
  { href: "#produk", label: "Harga" },
  { href: "#cara-pesan", label: "Cara Pesan" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-cream px-6 py-14">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
          <div className="text-center sm:text-left">
            <p className="font-display font-extrabold uppercase text-2xl">
              Chiz-Pocketaro
            </p>
            <p className="text-cream/70 text-sm">To-taro-ly Delicious</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={linkInstagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Chiz-Pocketaro"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-ink bg-cream/10 hover:bg-gold hover:text-ink transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2c2.7 0 3.05.01 4.12.06 1.07.05 1.79.22 2.43.46.66.25 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.24.64.41 1.36.46 2.43.05 1.07.06 1.42.06 4.12s-.01 3.05-.06 4.12c-.05 1.07-.22 1.79-.46 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.24-1.36.41-2.43.46-1.07.05-1.42.06-4.12.06s-3.05-.01-4.12-.06c-1.07-.05-1.79-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.24-.64-.41-1.36-.46-2.43C2.01 15.05 2 14.7 2 12s.01-3.05.06-4.12c.05-1.07.22-1.79.46-2.43.25-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.44 2.53c.64-.24 1.36-.41 2.43-.46C8.95 2.01 9.3 2 12 2zm0 1.8c-2.65 0-2.97.01-4.01.06-.87.04-1.34.19-1.65.31-.42.16-.71.35-1.02.66-.31.31-.5.6-.66 1.02-.12.31-.27.78-.31 1.65-.05 1.04-.06 1.36-.06 4.01s.01 2.97.06 4.01c.04.87.19 1.34.31 1.65.16.42.35.71.66 1.02.31.31.6.5 1.02.66.31.12.78.27 1.65.31 1.04.05 1.36.06 4.01.06s2.97-.01 4.01-.06c.87-.04 1.34-.19 1.65-.31.42-.16.71-.35 1.02-.66.31-.31.5-.6.66-1.02.12-.31.27-.78.31-1.65.05-1.04.06-1.36.06-4.01s-.01-2.97-.06-4.01c-.04-.87-.19-1.34-.31-1.65a2.73 2.73 0 0 0-.66-1.02 2.73 2.73 0 0 0-1.02-.66c-.31-.12-.78-.27-1.65-.31-1.04-.05-1.36-.06-4.01-.06zm0 3.06a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28zm0 1.8a3.34 3.34 0 1 0 0 6.68 3.34 3.34 0 0 0 0-6.68zm5.34-1.99a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" />
              </svg>
            </a>
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat WhatsApp Chiz-Pocketaro"
              className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-ink bg-cream/10 hover:bg-gold hover:text-ink transition-colors"
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.45 1.33 4.95L2 22l5.2-1.36a9.94 9.94 0 0 0 4.84 1.24h.01c5.5 0 9.96-4.46 9.96-9.96S17.54 2 12.04 2zm5.83 14.13c-.25.7-1.24 1.28-2.02 1.44-.53.11-1.23.2-3.57-.76-2.99-1.24-4.92-4.26-5.07-4.46-.15-.2-1.21-1.6-1.21-3.06 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37h.57c.18 0 .43-.03.66.5.25.6.85 2.05.92 2.2.07.15.12.32.02.52-.1.2-.15.33-.3.5-.15.18-.31.4-.44.53-.15.15-.3.31-.13.6.17.3.76 1.25 1.63 2.02 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.66-.15.27.1 1.7.8 2 .95.3.15.5.22.57.35.08.13.08.75-.17 1.44z" />
              </svg>
            </a>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-cream/80 border-y border-cream/20 py-5 mb-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gold transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-cream/50 text-xs text-center">
          © {new Date().getFullYear()} Chiz-Pocketaro — Djoeragan Pangan Competition 2026
        </p>
      </div>
    </footer>
  );
}
