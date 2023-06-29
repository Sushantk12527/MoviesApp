import React from "react";
class Overview extends React.Component {
  render() {
    return (
      <>
        <div className="overviewDiv">
          <div className="overlayEff"></div>
          <p>
            <b>Overview:</b>
          </p>
          <span>
            <p>{this.props.movie.overview}</p>
          </span>
        </div>
      </>
    );
  }
}

export default Overview;
