import Link from 'next/link';
import BtnPrimary from '@/components/BtnPrimary';
import BtnPrimaryOutline from '@/components/BtnPrimaryOutline';

const sliders = [
  {
    id: 1,
    title: 'Sistem Rekomendasi Produk UMKM (rekomU)',
    image: 'https://rekomu.praktekoding.com/storage/slider/slider1.png'
  },
  {
    id: 2,
    title: 'Dinas Koperasi dan UKM Kabupaten Kolaka',
    image: 'https://rekomu.praktekoding.com/storage/slider/slider2.png'
  },
]

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b1a23] opacity-70"></div>

      {/* Background Image with Blend */}
      <div className={`min-h-screen bg-cover bg-center`} style={{ backgroundImage: `url(${sliders[0].image})` }}></div>

      {/* Content */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <h6 className="font-opensans font-bold text-[#F28123] text-[15px] tracking-[7px]">REKOMU</h6>
          <h1 className="font-poppins mt-5 text-[65px] font-bold text-white max-w-4xl leading-tight">{sliders[0].title}</h1>
          <div className="font-poppins text-sm mt-9 flex gap-6 justify-center">
            <Link href={'/produk'}>
              <BtnPrimary label={'Lihat Produk'} />
            </Link>
            <Link href="/tentang">
              <BtnPrimaryOutline label={'Tentang'} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
