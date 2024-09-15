"use client"
import Link from "next/link";
import { BiLogIn } from 'react-icons/bi';
import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItem = [
  {
    title: 'Beranda',
    link: '/'
  }, {
    title: 'Produk',
    link: '/produk'
  },
  {
    title: 'Tentang',
    link: '/tentang'
  }
];

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`z-[2] text-sm font-opensans fixed w-full transition-all duration-300 ${scroll ? 'bg-[#051922] py-[18px]' : 'bg-transparent py-[30px]'
        }`}>
      <div className='container flex justify-between items-center'>
        <Link href={'/'}>
          <Image width={50} height={50} src="/logo.png" alt="logo" />
        </Link>
        <ul className='flex items-center'>
          {navItem.map((nav, i) => (
            <li key={i}>
              <Link href={nav.link} className={`font-bold p-[15px] hover:text-acsent duration-200 ease-linear ${isActive(nav.link) ? 'text-acsent' : 'text-white'}`}>{nav.title}</Link>
            </li>
          ))}

          {/* {usePage().props.authCheck && (
            <>
              <li>
                <Link href="/rekomendasi" className={`inline-flex items-center gap-2 font-bold p-[15px] hover:text-[#F28123] duration-200 ease-linear text-white`}>
                  Rekomendasi
                </Link>
              </li>

            </>
          )} */}
        </ul>
        <div className='text-white flex items-center'>
          {/* <div className='relative'>
            <Link href="/keranjang" className={`inline-flex items-center gap-2 font-bold p-[15px] hover:text-[#F28123] duration-200 ease-linear text-white`}>
              <FaShoppingCart className='text-lg' />
            </Link>
            <sub className='absolute top-4 right-1 font-semibold'>
              {usePage().props.cartCount}
            </sub>
          </div>
          <div>
            <Link href="/logout" className={`inline-flex items-center gap-2 font-bold p-[15px] hover:text-[#F28123] duration-200 ease-linear text-white`}>
              <IoSettings className='text-lg' />
            </Link>
          </div> */}
          <div>
            <Link href="/login" className={`inline-flex items-center gap-2 font-bold p-[15px] hover:text-acsent duration-200 ease-linear text-white`}>
              <BiLogIn className='text-lg' /> Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
