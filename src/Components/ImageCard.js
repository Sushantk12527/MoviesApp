import React from "react";
import "./ImageCard.css";
import Overview from "./Overview";
import Titletile from "./Titletile";

class ImageCard extends React.Component {
  state = {
    flag: false,
  };
  render() {
    return (
      <div>
        <div
          id="imageDiv"
          className="imgDiv"
          style={{ backgroundImage: `url(${this.props.posterPath} )` }}
          onMouseEnter={async () => {
            await this.setState({ flag: true });
            // console.log(this.state.flag);
          }}
          onMouseLeave={async () => {
            await this.setState({ flag: false });
            // console.log(this.state.flag);
          }}
        >
          {this.state.flag ? (
            <Overview movie={this.props.movie} />
          ) : (
            <Titletile movie={this.props.movie} />
          )}
          {/* <img alt="img" src={this.props.posterPath}> className="img" */}
        </div>
      </div>
    );
  }
}

export default ImageCard;
