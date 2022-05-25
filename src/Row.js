import React, { useEffect, useState } from 'react'
import axios from './axios';
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([])

    //A snippet of code wich runs based on a specific condition
    useEffect( ()=> {
        // if [],  run once when the row loads, and don't run again
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            console.table(request)
            return request;
            //"https://api.themoviedb.org/3"

        }
        fetchData();
        }, [fetchUrl])

  return (
    <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
            {/* {several row_poster(s)} */}
            
            {movies.map(movie =>(
                <img 
                key={movie.id}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name}
                />
            ))}
        </div>
        {/* {title} */}
        {/* {containert / posters} */}
    </div>
  )
}

export default Row