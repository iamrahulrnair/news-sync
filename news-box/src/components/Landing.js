import React from 'react';
import { useEffect, useState } from 'react';

import { useRequest } from '../../hooks/useRequest';
import { Loader } from './Loaders/Loader';

function Landing() {
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    const { doRequest } = useRequest();
    const { data } = await doRequest();
    setArticles(data.data);
  }, []);
  console.log(articles);
  if (articles.length == 0) {
    return <Loader />;
  }
  const renderNewsBox = () => {
    return articles.map((el, index) => {
      return <div key={index}>{el.title}</div>;
    });
  };
  return <div>{renderNewsBox()}</div>;
}
export default Landing;
