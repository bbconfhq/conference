/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Container, Title, Speaker, Category } from './style';

interface TalkProps {
  talk: Talk;
}

const TalkCard = (props: TalkProps): JSX.Element => {
  const { talk } = props;
  const { title, speaker, category } = talk;

  return (
    <Container>
      <Title>
        {title} <Category>{category}</Category>
      </Title>
      <Speaker>{speaker}</Speaker>
    </Container>
  );
};

export default TalkCard;
