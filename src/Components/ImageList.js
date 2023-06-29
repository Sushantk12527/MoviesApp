import React from "react";
import ImageCard from "./ImageCard";

class ImageList extends React.Component {
  render() {
    let filteredList = [];

    // console.log(this.props.movies.length);

    if (this.props.searchText.length > 0) {
      this.props.movies.forEach((movie) => {
        if (
          movie.title
            .toLowerCase()
            .indexOf(this.props.searchText.toLowerCase()) !== -1
        ) {
          filteredList.push(movie);
        }
      });
    } else {
      filteredList = this.props.movies;
    }

    const list = filteredList.map((movie) => {
      const posterPath = `https://image.tmdb.org/t/p/w1280${movie.poster_path}`;

      return (
        <ImageCard key={movie.title} movie={movie} posterPath={posterPath} />
      );
    });

    return list;
  }
}

export default ImageList;
