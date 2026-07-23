import Image from "next/image";
import Link from "next/link";

const product = {
  name: "Apple Watch Series 7 GPS, Aluminium Case, Starlight",
  price: "$599",
  rating: "4.8 out of 5",
  description:
    "A lightweight, premium smartwatch built for daily wear, fitness tracking, and effortless notifications. This detail page is a polished starting point for a real product CMS or API later.",
  features: [
    "Always-on Retina display",
    "Fitness and heart-rate tracking",
    "Water resistance up to 50 meters",
    "Fast charging support",
  ],
};




export default function Page({ params }) {
  const productId = params?.pid;

  return (
    <main className="bg-[#f7f6f2] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <nav className="mb-6 text-sm text-slate-500">
          <Link href="/" className="hover:text-lime-950">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link href="/product" className="hover:text-lime-950">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-700">Product {productId}</span>
        </nav>

        <section className="grid gap-8 rounded-4xl border border-black/5 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)] md:grid-cols-[1fr_1.05fr] md:p-8">
          <div className="overflow-hidden rounded-3xl bg-slate-100">
            <Image
              src="https://picsum.photos/536/354"
              alt={product.name}
              width={1200}
              height={1200}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-4 inline-flex w-fit rounded-full border border-lime-800/10 bg-lime-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-lime-950">
              Product detail
            </span>

            <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <span className="text-3xl font-extrabold text-slate-950">
                {product.price}
              </span>
              <span className="rounded-full border border-brand-subtle bg-brand-softer px-3 py-1 text-sm font-medium text-fg-brand-strong">
                {product.rating}
              </span>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              {product.description}
            </p>

            <div className="mt-8">
              <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                Key features
              </h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {product.features.map((feature) => (
                  <li
                    key={feature}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                  >
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full bg-lime-950 px-5 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-lime-900"
              >
                Add to cart
              </button>
              <Link
                href="/product"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-transform duration-200 hover:-translate-y-0.5 hover:border-lime-800/30 hover:text-lime-950"
              >
                Back to products
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
