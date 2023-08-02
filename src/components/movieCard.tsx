import { Calendar, Clock3, Star } from 'lucide-react';

export default function MovieCard({movie}) {
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex items-center justify-between'>
        <p className='text-white text-xl font-medium max-w-[8.75rem] whitespace-nowrap text-ellipsis overflow-hidden'>{movie.title}</p>
        <div className='flex font-semibold items-center gap-1'>
          <Star color='yellow' size={16} className='fill-yellow' />
          <span className='text-yellow'>{movie.vote_average}</span>
        </div>
      </div>
      <div className='w-64 h-96 bg-black'/>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <Clock3 color='#8B8D9B' size={20} />
          <span className='text-cinza-light text-xs'>{movie.release_date}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Calendar color='#8B8D9B' size={20} />
          <span className='text-cinza-light text-xs'>{movie.runtime} min</span>
        </div>
      </div>
    </div>
  )
}