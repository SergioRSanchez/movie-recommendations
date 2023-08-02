'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

import { Zap, Star, Clock3, Calendar, Loader } from 'lucide-react'

import Logo from '@/assets/logo.png'
import Play from '@/assets/play.svg'

interface Movie {
  id: number
  title: string
  release_date: string
  poster_path: string
  movieDetails: Array<{
    runtime: number
    type: string
    key: string
  }>
  movieVideo: Array<{
    key: string
    type: string
  }>
  type: string
  key: string
  vote_average: string
}

interface MovieCardProps {
  movie: Movie
}

const apiKey = process.env.NEXT_PUBLIC_API_KEY

export function MovieCard({movie}: MovieCardProps) {
  const [movieDetails, setMovieDetails] = useState<Movie["movieDetails"]>([])
  const [movieRunTime, setMovieRuntime] = useState(0)
  const [movieVideo, setMovieVideo] = useState<Movie["movieVideo"]>([])
  const [firstTrailerKey, setFirstTrailerKey] = useState<string | null>(null)

  const imageUrl = `https://image.tmdb.org/t/p/w500`

  const youTubeUrl = `https://www.youtube.com/watch?v=`

  const getYearFromRelease = (releaseDate: string): number => {
    const date = new Date(releaseDate)
    return date.getFullYear()
  }

  const getDetails = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovieDetails(data)
    setMovieRuntime(data.runtime)
  }

  useEffect(() => {
    const detailUrl = `https://api.themoviedb.org/3/movie/${movie.id}?${apiKey}&language=pt-BR`
    getDetails(detailUrl)
  }, [])
  
  const getVideoLink = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovieVideo(data.results)
  }

  useEffect(() => {
    const videoUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?${apiKey}`
    getVideoLink(videoUrl)
  }, [])

  const formatRunTime = (runtime: number): string => {
    const hours = Math.floor(runtime / 60)
    const minutes = runtime % 60
    return `${hours}:${minutes.toString().padStart(2, "0")}:00`
  }

  useEffect(() => {
    const firstTrailer = movieVideo.find((item) => item.type === 'Trailer')?.key || null
    setFirstTrailerKey(firstTrailer)
  }, [movieVideo])

  const [selectedMovieKey, setSelectedMovieKey] = useState<string | null>(null);
  const handleShowTrailer = (movieKey: string) => {
    setSelectedMovieKey(movieKey);
  };

  return (
    <div className='flex flex-col gap-3 hover:scale-105 transition-all duration-300 cursor-pointer animate-slide-down'>
      <div className='flex items-center justify-between'>
        <p className='text-white text-xl font-medium max-w-[8.75rem] whitespace-nowrap text-ellipsis overflow-hidden'>{movie.title}</p>
        <div className='flex font-semibold items-center gap-1'>
          <Star color='yellow' size={16} className='fill-yellow' />
          <span className='text-yellow'>{movie.vote_average}</span>
        </div>
      </div>
      <Image src={imageUrl + movie.poster_path} width={500} height={500} alt={movie.title} quality={100} className='w-64 h-96'/>
      <div className='flex justify-between'>
        <div className='flex items-center gap-1'>
          <Clock3 color='#8B8D9B' size={20} />
          <span className='text-cinza-light text-xs'>{formatRunTime(movieRunTime)}</span>
        </div>
        <div className='flex items-center gap-1'>
          <Calendar color='#8B8D9B' size={20} />
          <span className='text-cinza-light text-xs'>{getYearFromRelease(movie.release_date)}</span>
        </div>
      </div>
      <button className='bg-cinza flex items-center gap-2 justify-center px-4 py-2 rounded hover:bg-cinza-medio hover:scale-105 transition-all duration-300'>
        <div className='w-7 bg-cinza-dark rounded-full'>
          <Image src={Play} alt='Play' />
        </div>
        <a href={youTubeUrl + firstTrailerKey} target='_blank'><span className='text-white'>Assistir trailer</span></a>
        {/* <button onClick={() => handleShowTrailer(firstTrailerKey)}><span className='text-white'>Assistir trailer</span></button> */}
      </button>
      {/* {selectedMovieKey && 
        <iframe width="560" height="315" className='fixed z-10 top-1/2 left-1/2' src={`https://www.youtube.com/embed/${firstTrailerKey}`} title={`${movie.trailer} Trailer`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      } */}
    </div>
  )
}

export function EmptyMovieCard() {
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

export default function Home() {
  const [movies, setMovies] = useState<Movie[]>([]) 
  const [randomIndexes, setRandomIndexes] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const getRecommendations = async (url: string) => {
    const res = await fetch(url)
    const data = await res.json()
    setMovies(data.results)
  }

  useEffect(() => {
    const popularUrl = `https://api.themoviedb.org/3/movie/popular?${apiKey}&language=pt-BR`
    getRecommendations(popularUrl)
  }, [])

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

  useEffect(() => {
    if (movies.length > 0) {
      setRandomIndexes(getRandomIndexes(movies.length))
      setIsLoading(false)
    }
  }, [movies])

  const randomMovies: Movie[] = randomIndexes.map((index) => movies[index])

  const handleRandomMovies = () => {
    setIsLoading(true)
    setRandomIndexes(getRandomIndexes(movies.length))
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  return (
    <div 
      style={{background: 'var(--gradientes-gradiente-hover, linear-gradient(90deg, #9F55FF 0%, #FF46B9 100%))'}} 
      className='min-h-screen flex items-center justify-center'
    >
      {/* CONTAINER */}
      <div
        className='sm:px-24 sm:py-16 sm:rounded-2xl px-4 py-7 flex flex-col gap-9 bg-cinza-dark shadow-[0_-3px_22px_0_rgba(0,0,0,0.35)] w-screen sm:w-auto'
      >
        {/* HEADER */}
        <header className='flex justify-between'>
          <Image src={Logo} alt='Logo' width={100} height={100} />
          {!isLoading && 
            <button 
              className='flex text-white text-sm sm:text-base items-center sm:px-4 px-2 sm:py-2 py-1 rounded sm:gap-2 gap-1 justify-between bg-gradient-to-r from-[#8323FF] to-[#FF2DAF] hover:bg-gradient-to-r hover:from-[#9F55FF] hover:to-[#FF46B9] duration-300 transition-all hover:scale-105'
              onClick={handleRandomMovies}
            >
              Nova recomendação
              <div className='bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center'>
                <Zap color='white' size={18} />
              </div>
            </button>
          }
          {isLoading &&
              <button 
              className='flex text-white cursor-progress text-sm sm:w-52 w-[181px] sm:text-base items-center sm:px-4 px-2 sm:py-2 py-1 rounded sm:gap-2 gap-1 justify-center bg-gradient-to-r from-[#8323FF] to-[#FF2DAF] '
              onClick={handleRandomMovies}
            >
              Gerando...
              <div className='bg-white bg-opacity-20 w-8 h-8 rounded-full flex items-center justify-center animate-spin'>
                <Loader color='white' size={18} />
              </div>
            </button>
          }
          
        </header>
        {/* CARDS */}
        <div className='flex flex-col sm:flex-row gap-9 items-center'>
          {isLoading 
          ? 
          <EmptyMovieCard />
          : 
          randomMovies.map((movie) => (
          <MovieCard movie={movie} key={movie.id}/>
        ))}
        </div>
      </div>
    </div>
  )
}
