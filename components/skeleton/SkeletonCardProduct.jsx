import Skeleton from "react-loading-skeleton";

export default function SkeleteonCardProduct() {
  return (
    <div className="w-full shadow-lg -translate-y-1 pointer-events-none">
      <Skeleton className="w-full h-44" />
      <div className="p-5">
        <Skeleton />
        <Skeleton width={80} />
        <Skeleton className='mt-5 h-10' />
        <Skeleton className='mt-3.5' width={100} />
      </div>
    </div>
  )
}
