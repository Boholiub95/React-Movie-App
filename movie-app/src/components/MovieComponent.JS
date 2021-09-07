import React from 'react';

return (
  <MovieContainer
    onClick={() => {
      props.onMovieSelect(imdbID);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }}>
    <CoverImage src={Poster} alt={Title} />
    <MovieName>{Title}</MovieName>
    <InfoColumn>
      <MovieInfo>Year : {Year}</MovieInfo>
      <MovieInfo>Type : {Type}</MovieInfo>
    </InfoColumn>
  </MovieContainer>
);
export default MovieComponent;
