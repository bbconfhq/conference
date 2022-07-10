import * as React from "react"
import Layout from '../components/Layout';
import { Title, Time, Location, Link, SessionTitle, Divider } from './index.style';
import { useFetchSession } from '../hooks/useFetchSession';
import SessionList from '../components/SessionList';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2022</Title>
      <Time dateTime={'2022-08-20'}>2022년 8월 20일</Time>
      <Location>장소 : TBD</Location>
      <Link textAlign={'center'}  href={'https://forms.gle/9YN1t1aoE9CcNUD69'}>참가 신청 </Link>

      <Divider />

      <SessionTitle>Sessions</SessionTitle>
      <SessionList sessions={sessions} />

    </Layout>
    )
}

export default IndexPage
