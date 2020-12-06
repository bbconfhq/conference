/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Title, Container, SubTitle, Wave,
} from './styles';

const Hero = () => (
  <Container>
    <Title>
      BBConf 2020
      <br />
      Winter
    </Title>

    <SubTitle>
      <img src='/images/youtube@2x.png' alt='YouTube Logo' />
      {' '}
      <time>2020. 12. 19.</time>
      <span>Live Streaming</span>
    </SubTitle>
    {
      [...Array(4).keys()].map((i) => (
        <Wave
          key={i}
          fill='#fff'
          className={`depth-${i + 1}`}
          options={{
            height: 60 + ((i + 1) * 10),
            amplitude: 20 + ((i + 1) * 10),
            speed: 0.175,
            points: 4,
          }}
        />
      ))
    }
  </Container>
);

export default Hero;
