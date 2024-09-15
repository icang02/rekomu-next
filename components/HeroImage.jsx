export default function HeroImage({ title }) {
  return (
    <div className="relative h-[410px]">
      <div className="absolute inset-0 bg-[#0b1a23] opacity-70"></div>
      <div className={`bg-cover bg-center h-[410px]`} style={{ backgroundImage: `url(http://rekomu.praktekoding.com/storage/slider/slider2.png)` }}></div>
      <div className="absolute inset-0 flex items-center justify-center mt-12">
        <div className="text-center">
          <h6 className="font-opensans font-bold text-acsent text-[15px] tracking-[7px]">REKOMU</h6>
          <h1 className="font-poppins mt-5 text-[50px] font-bold text-white max-w-4xl leading-tight">{title}</h1>
        </div>
      </div>
    </div>
  )
}
