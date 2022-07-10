import * as React from 'react';
import type { RenderBodyArgs } from 'gatsby';
import { getCssText } from './src/stitches.config';

export const onRenderBody = ({ setHeadComponents }: RenderBodyArgs ) => {
  setHeadComponents([
    <style
      id="stitches"
      dangerouslySetInnerHTML={{
        __html: getCssText(),
      }}
    />,
  ]);
};
