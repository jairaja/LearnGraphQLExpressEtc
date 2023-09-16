import gql from "graphql-tag";

const getAllSongs = gql`
  {
    songs {
      title
      id
    }
  }
`;

const getSong = gql`
  query getSong($id: ID!) {
    song(id: $id) {
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

export { getAllSongs, getSong };
