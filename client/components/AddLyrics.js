import React, { Component } from "react";
import { addLyricsToSong } from "../graphql/mutations";
import { graphql } from "react-apollo";

class AddLyrics extends Component {
  constructor(props) {
    super(props);

    this.state = { lyrics: "" };
  }

  // const { lyric, setLyric } = useState("");

  onSubmit(event) {
    event.preventDefault();

    // console.log(this.props);

    this.props.mutate({
      variables: {
        songId: this.props.songId,
        content: this.state.lyrics,
      },
    });

    this.setState({ lyrics: "" });
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input
          value={this.state.lyrics}
          onChange={(event) => this.setState({ lyrics: event.target.value })}
        />
      </form>
    );
  }
}

export default graphql(addLyricsToSong)(AddLyrics);
