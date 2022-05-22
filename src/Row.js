import React, { useEffect, useState } from 'react'
import axios from './axios';

function Row({ title }) {
    const [movies, setMovies] = useState([])

    //A snippet of code wich runs based on a specific condition
    useEffect( ()=> {
        // if [],  run once when the row loads, and don't run again
    }, [movies])

  return (
    <div>
        <h2>{title}</h2>
        {/* {title} */}
        {/* {containert / posters} */}
    </div>
  )
}

export default Row