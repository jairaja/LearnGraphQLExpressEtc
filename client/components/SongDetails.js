import React from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";
import { getSong } from "../graphql/queries";
import AddLyrics from "./AddLyrics";
import LyricsList from "./LyricsList";

const SongDetails = (props) => {
  const { song } = props.data;
  console.log(song);
  return (
    <div>
      {!song ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Link to="/">Back</Link>
          <div>{song.title}</div>

          <LyricsList lyricsList={song.lyrics} />
          <AddLyrics songId={song.id} />
        </div>
      )}
    </div>
  );
};

export default graphql(getSong, {
  options: (props) => {
    return { variables: { id: props.params.id } };
  },
})(SongDetails);
