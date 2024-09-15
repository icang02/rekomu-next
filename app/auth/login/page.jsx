import Link from "next/link";
import { VscAccount } from 'react-icons/vsc';

export default function Login() {
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
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Login ke Akun Anda
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or
            <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-500"> buat akun baru</Link>
          </p>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                <div className="mt-1">
                  <input id="email" type="text" autoComplete="email"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="mt-1">
                  <input id="password" type="password" autoComplete="current-password"
                    className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                </div>

                {/* <div className="text-sm">
                  <Link href="/" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your
                    password?</Link>
                </div> */}
              </div>

              <div>
                <button type="submit"
                  className={`flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none`}>Masuk</button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="bg-white px-2 text-gray-500">Buat akun baru</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1">
                <div className='col-span-12'>
                  <Link href="/auth/register"
                    className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-500 shadow-sm hover:bg-gray-50">
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
