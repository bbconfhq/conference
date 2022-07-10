import { graphql, useStaticQuery } from 'gatsby';

export const useFetchSession = () => useStaticQuery<Queries.SessionsQuery>(graphql`
  query Sessions {
    allSessionsJson {
      nodes {
        id
        speaker
        title
      }
    }
  }
`);
