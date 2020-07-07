import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import TalkCard from '../components/TalkCard';
import SectionTitle from '../components/SectionTitle';

export default (): JSX.Element => {
  const [talks, setTalks] = useState([]);

  useEffect(() => {
    fetch('https://bbconf.s3.ap-northeast-2.amazonaws.com/2020/talks-summer.json', {
      mode: 'cors',
    })
      .then(res => res.json())
      .then(data => setTalks(data));
  }, []);

  return (
    <>
      <Header />
      <SectionTitle>Talks</SectionTitle>
      {talks.map(item => (
        <TalkCard key={item.title} talk={item} />
      ))}
    </>
  );
};
