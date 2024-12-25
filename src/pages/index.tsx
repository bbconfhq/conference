import * as React from 'react';

import { Title, Time, Location, SessionTitle, Divider } from '../common.styles';
import Layout from '../components/Layout';
import SessionList from '../components/SessionList';
import { useFetchSession } from '../hooks/useFetchSession';
import {SessionPlaceholder} from '../components/SessionPlaceholder';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2024 Winter</Title>
      <Time>2024년 1월 11일 토요일 12:00 ~ 18:00</Time>
      <Location>
        <a href='https://naver.me/Fn2s6XYI' target='_blank' rel='noreferrer'>
          Open UP Playground
        </a>
      </Location>

      <Divider />

      <SessionTitle>Sessions</SessionTitle>
      <SessionList sessions={sessions} />
      <SessionPlaceholder>- TBA -</SessionPlaceholder>
    </Layout>
  );
};

export default IndexPage;
