import React from "react";

class Titletile extends React.Component {
  render() {
    return (
      <div className="titleDiv">
        <span className="titleSpan">{this.props.movie.title}</span>
        <span
          className={
            this.props.movie.vote_average >= 8.0
              ? "ratingSpanGood"
              : "ratingSpanBad"
          }
        >
          {this.props.movie.vote_average}
        </span>
      </div>
    );
  }
}

export default Titletile;
