import * as React from 'react';

import { Title, Time, Location, SessionTitle, Divider } from '../common.styles';
import Layout from '../components/Layout';
import SessionList from '../components/SessionList';
import { useFetchSession } from '../hooks/useFetchSession';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2025</Title>
      <Time>Coming Soon...</Time>
      {/* <Location>
        <a href='https://naver.me/Fn2s6XYI' target='_blank' rel='noreferrer'>
          Open UP Playground
        </a>
      </Location> */}

      <Divider />

      {/* <SessionTitle>Sessions</SessionTitle> */}
      {/* <SessionList sessions={sessions} /> */}
      {/* <SessionPlaceholder>- TBA -</SessionPlaceholder> */}
    </Layout>
  );
};

export default IndexPage;
