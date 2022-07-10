import * as React from "react"
import Layout from '../components/Layout';
import { Title, SessionTitle, Divider } from '../common.styles';
import SessionList from '../components/SessionList';
import { useFetchArchive } from '../hooks/useFetchArchive';

const ArchivePage = () => {
  const archive = useFetchArchive().allArchiveJson.nodes;
  return (
    <Layout>
      <Title>Archive</Title>

      <Divider />
      {
        archive.map((data => (
          <>
            <SessionTitle>{ data.year }</SessionTitle>
            <SessionList sessions={data.sessions} />
         </>
        )))
      }
    </Layout>
  )
}

export default ArchivePage;
