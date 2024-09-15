import Link from 'next/link';
import { FaFacebookF, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { PiInstagramLogoFill } from 'react-icons/pi';

export default function Footer() {
  return (
    <footer className='bg-[#051922] py-5'>
      <div className="grid grid-cols-2 container text-gray-200 opacity-70">
        <div className="col-span-1 text-sm leading-relaxed">
          Copyright © {new Date().getFullYear()} - <Link href='/' className='font-bold text-acsent'>rekomU</Link>, All Right Reserved. <br />
          Dinas Koperasi dan UKM <Link href='/' className='font-bold text-acsent'>Kabupaten Kolaka</Link>
        </div>
        <div className="col-span-1 flex justify-end gap-5">
          <a href="#"><FaFacebookF className='hover:text-acsent duration-300' /></a>
          <a href="#"><FaTwitter className='hover:text-acsent duration-300' /></a>
          <a href="#"><PiInstagramLogoFill className='hover:text-acsent duration-300' /></a>
          <a href="#"><IoMdMail className='hover:text-acsent duration-300' /></a>
        </div>
      </div>
    </footer>
  )
}
