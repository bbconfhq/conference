import { graphql, useStaticQuery } from 'gatsby';

export const useFetchArchive = () => useStaticQuery<Queries.ArchiveQuery>(graphql`
  query Archive {
    allArchiveJson {
      nodes {
        sessions {
          speaker
          title
          category
          file_url
        }
        year
      }
    }
  }
`);
