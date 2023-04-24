import { ChevronLeftIcon } from '@heroicons/react/20/solid'

type BackarrowProps = {
  cancelUrl: string
  variants: string
}

const Backarrow = ({ cancelUrl, variants }: BackarrowProps) => {
  return (
    <a
      href={cancelUrl}
      className={`${variants} absolute z-50 grid h-12 w-12 place-content-center place-items-center rounded-[5px] border-none bg-[#8792A2]/10 outline-none ring-0 drop-shadow-sm active:outline-none `}>
      <ChevronLeftIcon className='h-6 w-6 text-DETAIL__BLACK' />
    </a>
  )
}

export default Backarrow
