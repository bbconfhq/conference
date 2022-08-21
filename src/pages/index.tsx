import * as React from "react"
import Layout from '../components/Layout';
import {Title, Time, Location, Link, SessionTitle, Divider, ApplicationLabel} from '../common.styles';
import { useFetchSession } from '../hooks/useFetchSession';
import SessionList from '../components/SessionList';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2022 - 2nd</Title>
      <Time dateTime={'2022-12-24'}>2022년 12월 예정</Time>
      <Location></Location>
      <ApplicationLabel></ApplicationLabel>

      <Divider />

      <SessionTitle>Sessions</SessionTitle>
      <SessionList sessions={sessions} />

    </Layout>
    )
}

export default IndexPage
