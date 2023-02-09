import * as React from "react"
import Layout from '../components/Layout';
import {Title, Time, Location, Link, SessionTitle, Divider, ApplicationLabel} from '../common.styles';
import { useFetchSession } from '../hooks/useFetchSession';
import SessionList from '../components/SessionList';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2023</Title>
      <Time>2023년 2월 예정</Time>
      <Location>장소: TBD</Location>
      <ApplicationLabel><Link href='https://forms.gle/ZbwzGfk8h12rjMaJ9'>참가 신청</Link></ApplicationLabel>

      <Divider />

      <SessionTitle>Sessions</SessionTitle>
      <SessionList sessions={sessions}/>

    </Layout>
    )
}

export default IndexPage
