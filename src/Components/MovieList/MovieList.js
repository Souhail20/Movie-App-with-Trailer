import './Movie.css';
import React from 'react';
import Rate from '../Rate';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';
const MovieList = ({moviesList,searchValue,SearchByRate}) => {
    
    return (
        <>
            <div className='image-container '>
                {moviesList
                    .filter((el) => el.Title.toLowerCase().includes(searchValue.toLowerCase().trim())
                    && el.rating>=SearchByRate)
                    .map((movie, index) => (
                        <div className="card" key={index}>
                            <img
                                className="movie__image"
                                src={movie.Poster}
                                alt="postal" />
                            <div className="flex__card">
                                <p className="heading">{movie.Title}</p>
                                <Rate rating={movie.rating} />
                                <br />
                                <Link to={{pathname:'/trailer', state:{movie:movie}}}>
                                <Button variant="outline-primary" style ={{alignSelf:'center'}}>See trailer</Button>
                                </Link>
                            </div>
                        </div>))}
            </div>
            
        </>
    )
    };

export default MovieList;