/** @jsx jsx */
import { jsx } from '@emotion/core';

import * as styles from './style';
import Button from '../Button';

const Intro = (): JSX.Element => {
  return (
    <div css={styles.Container}>
      <div css={styles.HeroContainer}>
        <h1 css={styles.Hero}>Baekjoon-Best Summer Conference 2020</h1>
        <span css={styles.Caption}>July 18th, Seoul</span>
      </div>
      <Button text="Join Community" href="https://open.kakao.com/o/gDzaohI" />
    </div>
  );
};

export default Intro;
