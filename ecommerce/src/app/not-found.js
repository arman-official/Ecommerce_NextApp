import Link from "next/link";
import { FiArrowRight, FiHome, FiSearch } from "react-icons/fi";

export const metadata = {
  title: "404 | Ecommerce",
  description: "The page you are looking for could not be found.",
};

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-[#f7f6f2]">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(45,74,26,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(198,217,106,0.35),transparent_28%),linear-gradient(180deg,#fbfaf6_0%,#f4f1e8_100%)]" />
      <div className="absolute left-1/2 top-24 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-lime-300/30 blur-3xl" />

      <section className="mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-5xl items-center px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="grid w-full gap-10 rounded-4xl border border-black/5 bg-white/80 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10">
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-lime-800/10 bg-lime-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-lime-950">
              <FiSearch className="text-sm" />
              Page not found
            </span>

            <div className="mt-6 max-w-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-lime-900/70">
                Oops, that route went missing
              </p>
              <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 sm:text-6xl">
                404
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                The page you were trying to open does not exist, may have moved,
                or the link was typed incorrectly. Use the buttons below to get
                back on track.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-lime-950 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-lime-900"
              >
                <FiHome />
                Back to home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 hover:border-lime-800/30 hover:text-lime-950"
              >
                Browse products
                <FiArrowRight />
              </Link>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                Check the URL for typos.
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3">
                Use search or navigation to continue.
              </div>
            </div>
          </div>

          <div className="relative flex items-center justify-center overflow-hidden rounded-3xl bg-[linear-gradient(160deg,#1f2e16_0%,#3f5a27_48%,#d6df93_100%)] p-6 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.22),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.16),transparent_22%)]" />
            <div className="relative text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur">
                <span className="text-5xl font-black tracking-tight text-white">
                  404
                </span>
              </div>

              <p className="mt-6 text-lg font-semibold uppercase tracking-[0.28em] text-white/80">
                Lost in the catalog
              </p>
              <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-white/75 sm:text-base">
                This space is intentionally calm, but the missing page is not.
                Head home or jump straight into the store.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-3 text-left text-sm">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <span className="block text-xl font-bold text-white">24/7</span>
                  <span className="text-white/70">support</span>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <span className="block text-xl font-bold text-white">New</span>
                  <span className="text-white/70">arrivals</span>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                  <span className="block text-xl font-bold text-white">Fast</span>
                  <span className="text-white/70">checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
