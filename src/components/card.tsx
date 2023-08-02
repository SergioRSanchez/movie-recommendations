import Image from 'next/image';



import { Calendar, Clock3, Star } from 'lucide-react';

export function Card(props) {
  return (
    <div className='flex flex-col gap-3 hover:scale-105 transition-all duration-300 cursor-pointer'>
      <div className='flex items-center justify-between'>
        <p className='text-white text-xl font-medium max-w-[8.75rem] whitespace-nowrap text-ellipsis overflow-hidden'>Barbie</p>
        <div className='flex font-semibold items-center gap-1'>
          <Star color='yellow' size={16} className='fill-yellow' />
          <span className='text-yellow'>4.9</span>
        </div>
      </div>
      <Image src={props.} alt='Barbie' quality={100} className='w-64 h-96'/>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <Clock3 color='#8B8D9B' size={20} />
          <span className='text-cinza-light text-xs'>1:54:00</span>
        </div>
        <div className='flex items-center gap-1'>
          <Calendar color='#8B8D9B' size={20} />
          <span className='text-cinza-light text-xs'>2023</span>
        </div>
      </div>
      <button className='bg-cinza flex items-center gap-2 justify-center px-4 py-2 rounded hover:bg-cinza-medio hover:scale-105 transition-all duration-300'>
        <div className='w-7 bg-cinza-dark rounded-full'>
          <Image src={Play} alt='Play' />
        </div>
        <span className='text-white'>Assistir trailer</span>
      </button>
    </div>
  )
}