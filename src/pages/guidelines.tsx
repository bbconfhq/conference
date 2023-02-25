import React from 'react';

import { Divider, Paragraph, Title } from '../common.styles';
import Layout from '../components/Layout';
import { styled } from '../stitches.config';

const List = styled('ol', {
  fontSize: '1.125rem',
});

const ListItem = styled('li', {
  marginLeft: '1.25rem',
  lineHeight: '1.75rem',
  '&:not(:last-child)': {
    marginBottom: '1rem',
  },
});

const GuidelinePage = () => {
  return (
    <Layout>
      <Title>Proposal Guidelines</Title>
      <Divider />
      <Paragraph>BBConf에서는 발표자가 누구든지 발표할 수 있지만, 청중들의 시간을 아끼기 위해 경험 공유와 지식 전달 모두 다루는 발표를 권장합니다.</Paragraph>
      <br />
      <Paragraph>발표는 아래 항목 중 하나를 선택하여 구성해야 합니다.</Paragraph>
      <br />
      <List>
        <ListItem>Algorithm: 문제 해결 과정에서 사용한 전략 및 알고리즘을 설명한다.</ListItem>
        <ListItem>Knowledge: 구체적인 코드를 통해 주제를 이해할 수 있도록 설명한다.</ListItem>
        <ListItem>Life: 개인 경험, 사례, 예시를 통해 일반적인 개념, 이론, 원칙 등을 설명한다.</ListItem>
        <ListItem>Project: 프로젝트에 대한 개요와 결과를 분석하고, 개선 방향을 제시한다.</ListItem>
      </List>
    </Layout>
  );
};

export default GuidelinePage;