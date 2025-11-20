import * as React from 'react';

import { Title, Time, Location, SessionTitle, Divider, Farewell } from '../common.styles';
import Layout from '../components/Layout';
import SessionList from '../components/SessionList';
import { useFetchSession } from '../hooks/useFetchSession';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf</Title>
      <Time>2018 ― 2025</Time>
      <Farewell>thank you, good bye!</Farewell>
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
