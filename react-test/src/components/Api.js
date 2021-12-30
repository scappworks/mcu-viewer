import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Api() {
    const [movies, setMovies] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const swapView = (id) => {
        var parentToSwap = document.getElementById(id);
        var childrenToSwap = parentToSwap.children;

        if(childrenToSwap[0].style.display === "none") {
            childrenToSwap[0].style.display = "inline-block";
            childrenToSwap[1].style.display = "none";
        }

        else {
            childrenToSwap[1].style.display = "inline-block";
            childrenToSwap[0].style.display = "none";
        }

        console.log(childrenToSwap);
    };

    useEffect(() => {
        axios
        .get("https://mcuapi.herokuapp.com/api/v1/movies")
        .then(response => {
                setMovies(response.data);
                setIsLoading(false);
        })
        .catch(function(err) {
            console.log(err);
        })
    }, []);

    if (isLoading) {
        return(
            <div><p>Loading...</p></div>
        )
    }

    else {
        return(
            <div className="page-item movies">
                {movies.data.map((movie, index) => {
                    return <div className="movie-container" id={movie.id} key={index} onClick={(() => swapView(movie.id))}>
                        <img className="page-item movie" src={movie.cover_url} alt={movie.title} ></img>
                        <div className="page-item movie-description">
                            <h3>{movie.title}</h3>
                            <p>{movie.overview}</p>
                            </div>
                    </div>
                })}
            </div>
        );
            }
}