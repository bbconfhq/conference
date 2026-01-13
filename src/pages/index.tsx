import * as React from 'react';

import { Title, Time, Location, SessionTitle, Divider, Farewell } from '../common.styles';
import Layout from '../components/Layout';
import SessionList from '../components/SessionList';
import { useFetchSession } from '../hooks/useFetchSession';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2025 Winter</Title>
      <Time>2026년 1월 18일 일요일 11:00 ~ 19:00</Time>
      <Location>
        <a href='https://naver.me/Fn2s6XYI' target='_blank' rel='noreferrer'>
          Open UP Playground
        </a>
      </Location>

      <Divider />

      <SessionTitle>Sessions</SessionTitle>
      <SessionList sessions={sessions} />
    </Layout>
  );
};

export default IndexPage;
