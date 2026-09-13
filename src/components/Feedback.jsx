import BackgroundDecor from "./BackgroundDecor.jsx";

const LINK_FEEDBACK =
  "https://docs.google.com/forms/d/e/1FAIpQLSfFNsmMz94Esy1s_48gd8o9OlCpwp4K_Zj9mN-7MvU6eldRhA/viewform?pli=1";

export default function Feedback() {
  return (
    <section className="relative px-6 py-16 bg-gold-tint overflow-hidden">
      <BackgroundDecor variant="soft" />
      <div className="relative z-10 max-w-md mx-auto text-center">
        <h2 className="font-display font-extrabold uppercase text-2xl text-brand-dark mb-2">
          Kasih Kami Masukan
        </h2>
        <p className="text-stone-600 mb-8">
          Udah pernah coba Chiz-Pocketaro? Ceritain pengalamanmu lewat form
          singkat ini, biar kami bisa terus jadi lebih baik.
        </p>
        <a
          href={LINK_FEEDBACK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-brand text-white font-bold px-6 py-3 rounded-full border-2 border-ink shadow-[4px_4px_0_#161116] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_#161116] transition-all"
        >
          Kasih Feedback
        </a>
      </div>
    </section>
  );
}
