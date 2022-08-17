import * as React from "react"
import Layout from '../components/Layout';
import {Title, Time, Location, Link, SessionTitle, Divider, ApplicationLabel} from '../common.styles';
import { useFetchSession } from '../hooks/useFetchSession';
import SessionList from '../components/SessionList';

const IndexPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>BBConf 2022</Title>
      <Time dateTime={'2022-08-20'}>2022년 8월 20일</Time>
      <Location>장소 : 토즈모임센터 선릉점 9층 <a href="https://naver.me/xorKYJyG ">[지도]</a></Location>
      <ApplicationLabel>참가 신청이 마감되었습니다.</ApplicationLabel>

      <Divider />

      <SessionTitle>Sessions</SessionTitle>
      <SessionList sessions={sessions} />

    </Layout>
    )
}

export default IndexPage
