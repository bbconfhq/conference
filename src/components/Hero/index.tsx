/** @jsx jsx */
import { jsx } from '@emotion/react';
import {
  Title, Container, SubTitle, Svg,
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
    <Svg viewBox='0 24 150 28' preserveAspectRatio='none' shapeRendering='auto'>
      <defs>
        <path id='wave' d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' />
      </defs>
      <g className='parallax'>
        {
          [...Array(4).keys()].map((i) => (
            <use className={`depth-${i}`} xlinkHref='#wave' x='48' y={`${i * 2}`} />
          ))
        }
      </g>
    </Svg>

  </Container>
);

export default Hero;
