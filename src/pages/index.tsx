import * as React from 'react';

import {Title, Time, Location, SessionTitle, Divider} from '../common.styles';
import Layout from '../components/Layout';
import SessionList from '../components/SessionList';
import { useFetchSession } from '../hooks/useFetchSession';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2023 Winter</Title>
      <Time>2023년 12월 23일 12:00 ~ 19:00</Time>
      <Location>토즈 양재점</Location>

      <Divider />

      <SessionTitle>Sessions</SessionTitle>
      <SessionList sessions={sessions}/>

    </Layout>
  );
};

export default IndexPage;
