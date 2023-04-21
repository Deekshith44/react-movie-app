import React, { useContext } from "react";
import { AppContext } from "../context";
import { NavLink } from "react-router-dom";

const Movies = () => {
  const { movie } = useContext(AppContext);
  return (
    <>
      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie.map((curmovie) => {
            const { imdbID, Title, Poster } = curmovie;
            const moviename = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2>
                      {moviename.length >= 15 ? `${moviename}...` : moviename}
                    </h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Movies;
