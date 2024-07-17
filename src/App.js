import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from './MovieCard'
const API_KEY = 'https://www.omdbapi.com/?i=tt3896198&apikey=2a13803f'
const App=()=>{
    const[movies,setMovies]=useState([])
    const[search,setSearch]=useState('')
    const imageUrl = process.env.PUBLIC_URL + '/img.png';
    const searchMovie=async(title)=>{
        const response=await fetch(`${API_KEY}&s=${title}`)
        const data=await response.json()
        setMovies(data.Search)
    }
    useEffect(()=>{
        searchMovie('Batman')
    },[])
    return(
    <div className='app'>
        <h1>NutFlix</h1>
        <div className='search'>
            <input
            placeholder='Search for Movie'
            value={search}
            onChange={(e)=>setSearch(e.target.value)}/>
            <img 
            src={imageUrl}
            alt='Search'
            onClick={()=>searchMovie(search)}/>
        </div>
        {
            movies?.length>0 ?(
            <div className='container'>
                {movies.map((movie)=>(
                    <MovieCard movie={movie}/>
                    )
                )}
            </div>
            )
            :(
                <div className='empty'>
                    <h2>No movies found</h2>
                </div>
            )
        }
    </div>
    )
}
export default App