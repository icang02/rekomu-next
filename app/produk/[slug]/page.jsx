import BtnPrimary from "@/components/BtnPrimary";
import HeroImage from "@/components/HeroImage"
import formatRupiah from "@/utils/formatRupiah";
import axios from "axios"
import { FaExclamationTriangle, FaFacebookF, FaShoppingCart, FaStar, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";

export default async function ProductDetail({ params }) {
  let product = null;
  try {
    let response = await axios.get(`${process.env.APIURL}/api/product/${params.slug}`);
    product = response.data.data.item;
  } catch (error) {
    console.log(error);
  }

  return (
    <>
      <HeroImage title={'Detail Produk'} />

      <div className="container py-16">
        <div className="grid grid-cols-12 gap-14">
          {product == null ? (
            <div className="col-span-12 text-center py-[7px]">
              <div className="flex flex-col items-center justify-center">
                <FaExclamationTriangle className="text-red-600 text-6xl mb-4" />
                <p className="text-red-600 text-base font-semibold">Error: Failed to load product data.</p>
              </div>
            </div>
          ) : (
            <>
              <div className="col-span-5">
                <img src={`http://rekomu2.test/storage/${product.image}`} alt="img" className="w-full rounded aspect-square object-cover object-center" />
              </div>
              <div className="col-span-7">
                <h6 className="font-bold text-2xl font-poppins">{product.name}</h6>
                <p className="text-slate-600 text-lg mt-6">Harga :</p>
                <h4 className="font-bold mt-1 text-3xl">{formatRupiah(product.price)}</h4>
                <div className="flex items-center mt-6 gap-3">
                  <p className="text-slate-600 text-lg">Rating :</p>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => {
                      if (i < Math.floor(product.average_rating)) {
                        return <FaStar className="text-acsent" key={i} />
                      } else {
                        return <FaStar className="text-gray-500" key={i} />
                      }
                    })}
                    <span className="text-gray-600 text-lg">&nbsp;({product.average_rating ? product.average_rating.toFixed(1) : '0.0'})</span>
                  </div>
                </div>
                <form className="mt-6">
                  <input type="number" min={1} className="w-full sm:w-40 block border border-gray-300 outline-none px-3 py-2.5 rounded" placeholder="0" required />
                  <div className="mt-4">
                    <BtnPrimary label={<span className="flex items-center gap-2 text-base"><FaShoppingCart /> Add to Cart</span>} />
                  </div>
                </form>
                <p className="mt-3">
                  <span className="font-bold text-sm text-gray-600">Kategori: </span>
                  <span className="text-gray-500 text-sm">{product.category.name}</span>
                </p>
                <div className="mt-7">
                  <h6 className="font-bold text-xl font-poppins">Share:</h6>
                  <div className="flex gap-3 mt-4 text-sm">
                    <a href="#"><FaFacebookF className='hover:text-acsent duration-300' /></a>
                    <a href="#"><FaTwitter className='hover:text-acsent duration-300' /></a>
                    <a href="#"><PiInstagramLogoFill className='hover:text-acsent duration-300' /></a>
                    <a href="#"><IoMdMail className='hover:text-acsent duration-300' /></a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}
