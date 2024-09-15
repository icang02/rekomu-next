import BtnPrimary from "@/components/BtnPrimary";
import HeroImage from "@/components/HeroImage";
import Link from "next/link";

export default function About() {
  return (
    <>
      <HeroImage title={'Tentang'} />

      <div className="container py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-gray-700">rekomU</h1>
          <p className="text-lg mb-6 max-w-2xl mx-auto px-4 text-gray-700">
            Sistem Rekomendasi Produk UMKM Berbasis Web Menggunakan Metode <span className="font-semibold">USER-BASED COLLABORATIVE FILTERING</span>.
          </p>
          <Link href={'/produk'}>
            <BtnPrimary label='Cari Produk' />
          </Link>
        </div>
      </div>
    </>
  )
}
