import gql from "graphql-tag";

const addSong = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      title
      id
    }
  }
`;

const deleteSong = gql`
  mutation DeleteSong($id: ID) {
    deleteSong(id: $id) {
      id
    }
  }
`;

const addLyricsToSong = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      title
      lyrics {
        id
        content
        likes
      }
    }
  }
`;

const likeLyric = gql`
  mutation LikeLyric($id: ID) {
    likeLyric(id: $id) {
      id
      likes
    }
  }
`;

export { deleteSong, addLyricsToSong, addSong, likeLyric };
