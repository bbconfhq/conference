import React from 'react';

import { Title, Item, Speaker, Category } from './style';

type Sessions = Queries.SessionsQuery['allSessionsJson']['nodes']
  | Queries.ArchiveQuery['allArchiveJson']['nodes'][number]['sessions'];

type Props = {
  sessions: Sessions;
};

const SessionList: React.FC<Props> = ({ sessions }) => {
  return (
    <ul>
      {
        sessions?.map(session => {
          if (session === null) {
            return null;
          }
          return (
            <Item key={`${session.speaker}-${session.title}}`}>
              {'category' in session && session?.category && <Category>{session.category}</Category>}
              {'file_url' in session && session.file_url
                ? <Title as={'a'} href={session.file_url} target={'_blank'}>{session.title}</Title>
                : <Title>{session.title}</Title>
              }
              <Speaker>{session.speaker}</Speaker>
            </Item>
          );
        })}
    </ul>
  );
};

export default SessionList;