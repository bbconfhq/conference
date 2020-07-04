/** @jsx jsx */
import { jsx } from '@emotion/core';

import style from './style';

interface ButtonProps {
  text: string;
  href: string;
  target?: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  const { text, href, target = '_blank' } = props;
  return (
    <a target={target} css={style} href={href}>
      {text}
    </a>
  );
};

Button.defaultProps = {
  target: '_blank',
};

export default Button;
