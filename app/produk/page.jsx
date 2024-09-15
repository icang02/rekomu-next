'use client'
import axios from "axios";
import Link from "next/link";
import { FaEye, FaStar } from "react-icons/fa";
import HeroImage from "@/components/HeroImage";
import formatRupiah from "@/utils/formatRupiah";
import { useEffect, useState } from "react";
import SkeleteonCardProduct from "@/components/skeleton/SkeletonCardProduct";

export default function Product() {
  const [search, setSearch] = useState('');
  const [categoryState, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  const clickCategory = (category) => {
    setCategory(category);
  }

  useEffect(() => {
    setTimeout(() => {
      axios.get('http://rekomu2.test/api/products')
        .then(response => {
          setProducts(response.data.data.products.data);
          setCategories(response.data.data.categories);
        })
        .catch(error => {
          console.error(error);
        });
    }, 1000);
  }, []);

  return (
    <>
      <HeroImage title={'List Produk'} />

      <div className="container py-16">
        <div className="flex items-center justify-center mb-14">
          {/* Form Search Data */}
          <form className="flex border border-gray-300 rounded-lg overflow-hidden duration-200 focus-within:shadow-[0_0_10px_rgba(242,129,35,0.7)]">
            <input
              type="text"
              value={search}
              onChange={() => onChangeSearch()}
              className="px-4 py-2 w-[380px] focus:outline-none focus:ring-2 focus:ring-acsent transition-all duration-200"
              placeholder="Cari produk..."
            />
            <button
              type="submit"
              className="bg-acsent rounded-tr-lg rounded-br-lg text-white px-4 py-2 text-sm hover:bg-acsent/70 transition-all duration-200 active:opacity-80"
            >
              Search
            </button>
          </form>
          {/* Form Search Data End */}
        </div>

        {/* List Produk */}
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-8">
            <div className="grid grid-cols-12 gap-x-4 gap-y-6">
              {products.length == 0 ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <div key={index} className="col-span-4">
                    <SkeleteonCardProduct />
                  </div>
                ))
              ) : search.length >= 0 && products.length == 0 ? (
                <p className="col-span-12 text-center text-gray-500">No products found.</p>
              ) : (
                products.map((item, index) => (
                  <div key={index} className="col-span-4">
                    <div className="font-opensans w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                      <Link href={`/produk/${item.slug}/show`}>
                        <img
                          src={`${'http://rekomu2.test'}/storage/${item.image}`}
                          alt="Product"
                          className="w-full h-44 object-cover"
                        />
                      </Link>
                      <div className="p-5">
                        {/* Judul Produk */}
                        <h5 className="font-poppins text-base font-bold mb-0 text-gray-900">{item.name}</h5>

                        {/* Nama Toko */}
                        <p className="text-gray-500 mb-2 text-xs">{item.seller.user.name}</p>

                        <div className="flex justify-between items-center mb-1">
                          {/* Harga */}
                          <p className="text-lg font-bold text-black opacity-50">
                            {formatRupiah(item.price)}
                          </p>

                          {/* Total Views */}
                          <div className="flex items-center text-gray-500 text-xs">
                            <FaEye className="mr-1" />
                            <span>{item.count_view}x dilihat</span>
                          </div>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-[1px] mb-3 text-xs">
                          {[...Array(5)].map((_, i) => {
                            if (i < Math.floor(item.average_rating)) {
                              return <FaStar className="text-acsent" key={i} />
                            } else {
                              return <FaStar className="text-gray-500" key={i} />
                            }
                          })}
                          <span className="text-gray-600">&nbsp;({typeof item.average_rating == 'number' ? item.average_rating.toFixed(1) : '0.0'})</span>
                        </div>

                        {/* Tombol */}
                        <Link href={`/produk/${item.slug}/show`} className="text-gray-600 font-bold text-sm hover:text-acsent duration-200">
                          Selengkapnya
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          <div className="col-span-3">
            <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-5">
              <h4 className="text-xl font-bold mb-4">Kategori</h4>
              <ul>
                <li className="mb-2">
                  <span
                    onClick={() => clickCategory('')}
                    className={`cursor-pointer w-full block border border-gray-300 bg-gray-100 hover:bg-gray-200  rounded-md px-3 py-2 text-sm transition duration-200 ${categoryState == '' ? '!text-acsent' : 'text-gray-700'}`}
                  >
                    Semua
                  </span>
                </li>

                {categories.map((category, index) => (
                  <li key={index} className="mb-2">
                    <span
                      onClick={() => clickCategory(category.slug)}
                      className={`cursor-pointer w-full block border border-gray-300 bg-gray-100 hover:bg-gray-200  rounded-md px-3 py-2 text-sm transition duration-200 ${category.slug == categoryState ? '!text-acsent' : 'text-gray-700'}`}
                    >
                      {category.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
