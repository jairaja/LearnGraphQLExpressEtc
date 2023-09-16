import "../style/style.css";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import { getAllSongs } from "../graphql/queries";
import { deleteSong } from "../graphql/mutations";

class SongList extends Component {
  onSongDelete(event, id) {
    // console.log(event);
    // console.log(id);
    this.props
      .mutate({
        variables: {
          id: id,
        },
        // refetchQueries: [{ query: getAllSongs }],
      })
      .then(() => this.props.data.refetch());
  }

  renderSongs() {
    return this.props.data.songs.map(({ title, id }) => {
      return (
        <li key={id} className="collection-item">
          {/* <a href={"http://localhost:4000/#/song/" + id}>
            <div>{title}</div>
          </a> */}
          <Link to={"/song/" + id}>{title}</Link>
          <i
            className="material-icons"
            onClick={(event) => this.onSongDelete(event, id)}
            // onClick={this.onSongDelete.bind(this, [id])}
          >
            delete
          </i>
        </li>
      );
    });
  }

  render() {
    // console.log(getAllSongs);

    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <ul className="collection">{this.renderSongs()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

// export default graphql(getAllSongs)(SongList);
export default graphql(deleteSong)(graphql(getAllSongs)(SongList));
