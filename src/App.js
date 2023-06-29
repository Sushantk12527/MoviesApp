import React from "react";
import "./App.css";
import MoviesAxios from "./moviesAxios";
import ImageList from "./Components/ImageList";

class App extends React.Component {
  state = { movies: [], pageNo: 1, searchText: "" };

  componentDidMount() {
    const response = MoviesAxios.get("", {
      params: {
        sort_by: "popularity.desc",
        api_key: "04c35731a5ee918f014970082a0088b1",
        page: this.state.pageNo,
      },
    });

    response.then((response) =>
      this.setState({ movies: response.data.results })
    );
  }

  onPrevClick = async () => {
    if (this.state.pageNo > 1) {
      await this.setState({ pageNo: this.state.pageNo - 1 });
    }

    const response = MoviesAxios.get("", {
      params: {
        sort_by: "popularity.desc",
        api_key: "04c35731a5ee918f014970082a0088b1",
        page: this.state.pageNo,
      },
    });

    response.then((response) =>
      this.setState({ movies: response.data.results })
    );
  };

  onNextClick = async () => {
    await this.setState({ pageNo: this.state.pageNo + 1 });
    const response = MoviesAxios.get("", {
      params: {
        sort_by: "popularity.desc",
        api_key: "04c35731a5ee918f014970082a0088b1",
        page: this.state.pageNo,
      },
    });

    response.then((response) =>
      this.setState({ movies: response.data.results })
    );
  };

  onSearchTextSubmit = async (e) => {
    await this.setState({ searchText: e.target.value });
  };

  render() {
    return (
      <div>
        <div>
          <form>
            <input
              type="text"
              className="searchBar"
              onChange={this.onSearchTextSubmit}
            />
          </form>
        </div>
        <div className="imgList">
          {
            <ImageList
              movies={this.state.movies}
              searchText={this.state.searchText}
            />
          }
        </div>
        <div className="footer">
          <span
            className="pgbtn"
            onClick={() => {
              this.onPrevClick();
            }}
          >
            prev
          </span>
          <span className="pgbtn"> {this.state.pageNo}</span>
          <span
            className="pgbtn"
            onClick={(e) => {
              this.onNextClick();
            }}
          >
            next
          </span>
        </div>
      </div>
    );
  }
}

export default App;
