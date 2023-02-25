import * as React from 'react';

import { Title, Link, Divider, Paragraph } from '../common.styles';
import Layout from '../components/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <Title>About</Title>

      <Divider />

      <Paragraph>
        BBConf는 2018년 12월 28일 백준푸는방 오픈카톡방 커뮤니티에서 시작한, 누구나 참여 가능한 오픈 컨퍼런스입니다.
        '각자 알고 있는 유용한 지식을 나누자'는 취지에서 시작한 본 컨퍼런스는 현재 약 40여명의 회원 분이 꾸준히 참가해주고 계십니다.
      </Paragraph>

      <Divider />

      <Title subTitle={true}>Community</Title>
      <Paragraph>
        백준푸는방은 알고리즘 교육 및 학습과 SW 개발 경험 공유를 전문으로 하는 오픈카톡방 기반의 커뮤니티입니다.
        커뮤니티 이름에서 알 수 있듯이, 알고리즘을 중점으로 활동하고 있으며, 이 외에도 "자료구조, 네트워크, 운영체제, 데이터베이스" 등
        Computer Science에 빠질 수 없는 필수적인 과목들을 교육하거나 학습하고 있습니다.
        또한, SW 개발 중 개발자 개개인의 사용하는 언어, 운영체제, 개발환경에 따라 천차만별로 달라질 수 있는 경험을 본 컨퍼런스를 통해 공유하며
        서로의 견문을 넓히고 있습니다.
      </Paragraph>
      <Link textAlign={'center'} href={'https://open.kakao.com/o/gDzaohI'}>Join Community</Link>

      <Divider />

      <Title subTitle={true}>Contact</Title>
      <Paragraph>
        컨퍼런스 관련 문의, 협찬 메일은 아래 링크를 이용해주세요.
      </Paragraph>
      <Link textAlign={'center'} href={'mailto:admin@bbconf.kr'}>E-mail to Us</Link>
    </Layout>
  );
};

export default AboutPage;
