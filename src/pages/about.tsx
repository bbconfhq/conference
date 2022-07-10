import * as React from "react"
import Layout from '../components/Layout';
import { Title, Link, Divider, AboutText } from './index.style';
import { useFetchSession } from '../hooks/useFetchSession';

const AboutPage = () => {
  const sessions = useFetchSession().allSessionsJson.nodes;
  return (
    <Layout>
      <Title>About</Title>
      <Divider />

      <AboutText>
        백준푸는방은 알고리즘 교육 및 학습과 SW 개발 경험 공유를 전문으로 하고 있습니다.
        알고리즘의 경우 CS라고도 불리는 "자료구조, 네트워크, 운영체제, 데이터베이스" 등 Fundamental Computer Science에 빠질 수 없는,
        필수적인 활용 요소들을 교육하거나 학습하고 있습니다.
        또한, SW 개발은 개발자 개개인의 사용하는 언어, 운영체제, 개발환경에 따라 천차만별로 달라질 수 있는 경험을 공유하며 서로의 견문을 넓히고 있습니다.
      </AboutText>

      <Divider />

      <Title subTitle={true}>Contact</Title>
      <Link href={'mailto:admin@bbconf.kr'}>E-mail</Link>
      <Link href={'https://open.kakao.com/o/gDzaohI'}>Join Community</Link>
    </Layout>
  )
}

export default AboutPage
