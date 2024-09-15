'use client'

import { FaCheckCircle, FaInfoCircle, FaShoppingCart } from "react-icons/fa"
import BtnPrimary from "../BtnPrimary"
import NotifyAlert from "@/utils/NotifyAlert";
import { useState } from "react";
import axios from "axios";

export default function AddCart({ APIURL, product }) {
  const [qty, setQty] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const addCart = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${APIURL}/api/addcart`, {
        quantity: qty,
        item_id: product.id,
        user_id: 1,
      });
      NotifyAlert(<FaCheckCircle className="text-green-500" />, res.data.message);
      setQty('');
    } catch (error) {
      // console.error(error);
      if (error.status === 409)
        return NotifyAlert(<FaInfoCircle className="text-blue-500" />, error.response.data.message);
      return NotifyAlert(<FaInfoCircle className="text-red-500" />, error.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form onSubmit={addCart} className="mt-6">
      <input value={qty} onChange={(e) => setQty(e.target.value)} type="number" min={1} className="w-full sm:w-40 block border border-gray-300 outline-none px-3 py-2.5 rounded" placeholder="0" required />
      <div className={`mt-4 ${isLoading ? 'animate-pulse pointer-events-none' : ''}`}>
        <BtnPrimary label={<span className="flex items-center gap-2 text-base"><FaShoppingCart /> Add to Cart</span>} />
      </div>
    </form>
  )
}
