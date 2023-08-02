import { Calendar, Clock3, Star } from 'lucide-react';
import Image from 'next/image';

import Play from '@/assets/play.svg'

export default function EmptyMovieCard() {
  return (
    <div className='flex flex-col sm:flex-row gap-9 items-center animate-pulse cursor-wait'>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <p className='text-white text-xl font-medium max-w-[8.75rem] whitespace-nowrap text-ellipsis overflow-hidden'></p>
          <div className='flex font-semibold items-center gap-1'>
            <Star color='yellow' size={16} className='fill-yellow' />
            <span className='text-yellow'></span>
          </div>
        </div>
        <div className='w-64 h-96 bg-black'/>
        <div className='flex justify-between'>
          <div className='flex items-center gap-1'>
            <Clock3 color='#8B8D9B' size={20} />
            <span className='text-cinza-light text-xs'></span>
          </div>
          <div className='flex items-center gap-1'>
            <Calendar color='#8B8D9B' size={20} />
            <span className='text-cinza-light text-xs'></span>
          </div>
        </div>
        <button className='bg-cinza flex items-center gap-2 justify-center px-4 py-2 rounded hover:bg-cinza-medio hover:scale-105 transition-all duration-300'>
          <div className='w-7 bg-cinza-dark rounded-full'>
            <Image src={Play} alt='Play' />
          </div>
          <span className='text-white'></span>
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <p className='text-white text-xl font-medium max-w-[8.75rem] whitespace-nowrap text-ellipsis overflow-hidden'></p>
          <div className='flex font-semibold items-center gap-1'>
            <Star color='yellow' size={16} className='fill-yellow' />
            <span className='text-yellow'></span>
          </div>
        </div>
        <div className='w-64 h-96 bg-black'/>
        <div className='flex justify-between'>
          <div className='flex items-center gap-1'>
            <Clock3 color='#8B8D9B' size={20} />
            <span className='text-cinza-light text-xs'></span>
          </div>
          <div className='flex items-center gap-1'>
            <Calendar color='#8B8D9B' size={20} />
            <span className='text-cinza-light text-xs'></span>
          </div>
        </div>
        <button className='bg-cinza flex items-center gap-2 justify-center px-4 py-2 rounded hover:bg-cinza-medio hover:scale-105 transition-all duration-300'>
          <div className='w-7 bg-cinza-dark rounded-full'>
            <Image src={Play} alt='Play' />
          </div>
          <span className='text-white'></span>
        </button>
      </div>
      <div className='flex flex-col gap-3'>
        <div className='flex items-center justify-between'>
          <p className='text-white text-xl font-medium max-w-[8.75rem] whitespace-nowrap text-ellipsis overflow-hidden'></p>
          <div className='flex font-semibold items-center gap-1'>
            <Star color='yellow' size={16} className='fill-yellow' />
            <span className='text-yellow'></span>
          </div>
        </div>
        <div className='w-64 h-96 bg-black'/>
        <div className='flex justify-between'>
          <div className='flex items-center gap-1'>
            <Clock3 color='#8B8D9B' size={20} />
            <span className='text-cinza-light text-xs'></span>
          </div>
          <div className='flex items-center gap-1'>
            <Calendar color='#8B8D9B' size={20} />
            <span className='text-cinza-light text-xs'></span>
          </div>
        </div>
        <button className='bg-cinza flex items-center gap-2 justify-center px-4 py-2 rounded hover:bg-cinza-medio hover:scale-105 transition-all duration-300'>
          <div className='w-7 bg-cinza-dark rounded-full'>
            <Image src={Play} alt='Play' />
          </div>
          <span className='text-white'></span>
        </button>
      </div>
    </div>
  )
}