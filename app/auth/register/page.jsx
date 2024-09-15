'use client'
import NotifyAlert from "@/utils/NotifyAlert";
import axios from "axios";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { VscAccount } from 'react-icons/vsc';

export default function Register() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    group_id: ''
  });

  const register = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('http://rekomu2.test/api/register', form);
      setForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        group_id: ''
      });
      setErrors([]);
      NotifyAlert(<FaCheckCircle className="text-green-500" />, res.data.message);
      router.push('/auth/login');
    } catch (error) {
      if (error.status === 422)
        return setErrors(error.response.data.data);
      NotifyAlert(<FaInfoCircle className="text-red-500" />, error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-screen bg-gray-50">
      <div
        className="pointer-events-none absolute top-20 right-32 w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70">
      </div>
      <div
        className="pointer-events-none hidden xl:block absolute bottom-10 left-32 w-[500px] h-[500px] bg-[#FFB20080] rounded-full mix-blend-multiply filter blur-[150px] opacity-70">
      </div>

      <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link href="/">
            <img className="mx-auto h-16 rounded w-auto shadow bg-white p-1"
              src={`/logo.png`} alt="img" />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Register Akun Baru
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500"> login ke akun Anda</Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-2xl">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={register}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nama User / UMKM</label>
                  <div className="mt-1">
                    <input value={form.name} onChange={(e) => setForm(prevForm => ({ ...prevForm, name: e.target.value }))} id="name" type="name" autoComplete="current-name"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                    {errors && (
                      <span className="text-red-500 text-xs">{errors.name}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Alamat Email</label>
                  <div className="mt-1">
                    <input value={form.email} onChange={(e) => setForm(prevForm => ({ ...prevForm, email: e.target.value }))} id="email" type="text" autoComplete="email"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                    {errors && (
                      <span className="text-red-500 text-xs">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                  <div className="mt-1">
                    <input value={form.password} onChange={(e) => setForm(prevForm => ({ ...prevForm, password: e.target.value }))} id="password" type="password" autoComplete="current-password"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                    {errors && (
                      <span className="text-red-500 text-xs">{errors.password}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-700">Konfirmasi Password</label>
                  <div className="mt-1">
                    <input value={form.password_confirmation} onChange={(e) => setForm(prevForm => ({ ...prevForm, password_confirmation: e.target.value }))} id="password_confirmation" type="password_confirmation" autoComplete="current-password_confirmation"
                      className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                    {errors && (
                      <span className="text-red-500 text-xs">{errors.password_confirmation}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="tipe_user" className="block text-sm font-medium text-gray-700">Tipe User</label>
                  <div className="mt-1">
                    <select value={form.group_id} onChange={(e) => setForm(prevForm => ({ ...prevForm, group_id: e.target.value }))} id="tipe_user" className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                      <option value="">Pilih</option>
                      <option value="2">User</option>
                      <option value="3">UMKM</option>
                    </select>
                    {errors && (
                      <span className="text-red-500 text-xs">{errors.group_id}</span>
                    )}
                  </div>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-400">Saya menyetujui s&k rekomU</label>
                  <div className="mt-1">
                    <button type="submit"
                      className={`${loading ? 'animate-pulse pointer-events-none' : ''} flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none`}>Register</button>
                  </div>
                </div>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Login akun</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1">
                <div className='col-span-12 text-center'>
                  <Link href="/auth/login"
                    className="inline-flex w-full sm:w-64 justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <VscAccount className='text-xl' />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
