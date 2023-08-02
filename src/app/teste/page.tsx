'use client'

import { Calendar, Clock3, Star } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import Play from '@/assets/play.svg'
import Barbie from '@/assets/Barbie.png'

interface Movie {
  id: number
  title: string
}

export function MovieCard({movie}) {
  return (
    <div className='flex flex-col gap-3 hover:scale-105 transition-all duration-300 cursor-pointer'>
      <div className='flex items-center justify-between'>
        <p className='text-white text-xl font-medium max-w-[8.75rem] whitespace-nowrap text-ellipsis overflow-hidden'>{movie.title}</p>
        <div className='flex font-semibold items-center gap-1'>
          <Star color='yellow' size={16} className='fill-yellow' />
          <span className='text-yellow'>4.9</span>
        </div>
      </div>
      <Image src={Barbie} alt='Barbie' quality={100} className='w-64 h-96'/>
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

export default function Teste() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const token = process.env.NEXT_PUBLIC_TOKEN;


  const [movies, setMovies] = useState<Movie[]>([]);

  const getRecommendations = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovies(data.results);
  };

  useEffect(() => {
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR`;
    getRecommendations(popularUrl);
  }, []);

  // Função para gerar três números aleatórios não repetidos entre 0 e o tamanho da lista de filmes
  const getRandomIndexes = (length: number) => {
    const indexes: number[] = [];
    while (indexes.length < 3) {
      const randomIndex = Math.floor(Math.random() * length);
      if (!indexes.includes(randomIndex)) {
        indexes.push(randomIndex);
      }
    }
    return indexes;
  };

  // Filmes aleatórios baseados nos índices gerados
  const randomMovies = movies.length > 0 ? getRandomIndexes(movies.length).map((index) => movies[index]) : [];

  return (
    <div>
      <ul>
        {randomMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
          // <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  )
}