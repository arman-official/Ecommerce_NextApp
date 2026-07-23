import { FiShoppingBag } from "react-icons/fi";

function Loading() {
  return (
    <main className="relative isolate flex min-h-screen items-center justify-center overflow-hidden bg-[#f7f6f2] px-4">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(45,74,26,0.18),transparent_30%),radial-gradient(circle_at_80%_20%,rgba(198,217,106,0.28),transparent_28%),linear-gradient(180deg,#fbfaf6_0%,#f4f1e8_100%)]" />
      <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-lime-300/30 blur-3xl" />

      <div className="w-full max-w-md rounded-4xl border border-black/5 bg-white/80 p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-lime-950 text-white shadow-[0_14px_30px_rgba(31,46,22,0.25)]">
          <FiShoppingBag className="text-3xl" />
        </div>

        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-lime-900/70">
          Loading storefront
        </p>
        <h1 className="mt-3 text-2xl font-black tracking-tight text-slate-950 sm:text-3xl">
          Preparing your products
        </h1>
        <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
          We’re fetching the latest arrivals and setting up the page for a smooth
          shopping experience.
        </p>

        <div className="mt-8">
          <div className="h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-2/3 rounded-full bg-[linear-gradient(90deg,#1f2e16_0%,#64813b_55%,#d6df93_100%)] animate-pulse" />
          </div>
          <div className="mt-4 flex items-center justify-between text-xs font-medium uppercase tracking-[0.22em] text-slate-500">
            <span>Catalog</span>
            <span>Almost ready</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-3 text-left text-sm">
          <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4">
            <span className="block text-lg font-bold text-slate-950">New</span>
            <span className="text-slate-500">drops</span>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4">
            <span className="block text-lg font-bold text-slate-950">Fast</span>
            <span className="text-slate-500">browse</span>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white px-3 py-4">
            <span className="block text-lg font-bold text-slate-950">Safe</span>
            <span className="text-slate-500">checkout</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Loading;
