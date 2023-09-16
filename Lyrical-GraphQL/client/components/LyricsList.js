import React from "react";
import { graphql } from "react-apollo";
import { likeLyric } from "../graphql/mutations";

const LyricsList = (props) => {
  // onClickLike = ()=>{

  // }

  const renderLyrics = () => {
    return props.lyricsList.map((lyric) => {
      return (
        <li key={lyric.id} className="collection-item">
          {lyric.content}
          <div className="vote-box">
            <i
              className="material-icons"
              onClick={() => {
                props.mutate({
                  variables: { id: lyric.id },
                  optimisticResponse: {
                    __typename: "Mutation",
                    likeLyric: {
                      id: lyric.id,
                      likes: lyric.likes + 1,
                      __typename: "LyricType",
                    },
                  },
                });
              }}
            >
              thumb_up
            </i>
            {lyric.likes}
          </div>
        </li>
      );
    });
  };

  return <ul className="collection">{renderLyrics()}</ul>;
};

export default graphql(likeLyric)(LyricsList);
