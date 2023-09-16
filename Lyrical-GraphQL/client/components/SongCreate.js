import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";
import { getAllSongs } from "../graphql/queries";
import { addSong } from "../graphql/mutations";

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = { title: "" };
  }

  onSubmit(event) {
    event.preventDefault();

    // console.log(this.props);
    this.props
      .mutate({
        variables: {
          title: this.state.title,
        },
        refetchQueries: [{ query: getAllSongs }],
      })
      .then(() => hashHistory.push("/"));
  }

  render() {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create Song Page</h3>

        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Add song Title</label>
          <input
            type="text"
            onChange={(event) => this.setState({ title: event.target.value })}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

export default graphql(addSong)(SongCreate);
