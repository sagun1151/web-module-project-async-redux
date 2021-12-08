import React from 'react';
import { Link } from 'react-router-dom';

const AnimeHeader = () => {
    return ( 
        <div className="animeHeader">
              <h1>Some Cool Anime Facts</h1>
                <Link to="/anime"> See All</Link>
        </div>
    )
}

export default AnimeHeader;