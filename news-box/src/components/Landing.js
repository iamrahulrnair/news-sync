import React from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Loader } from './Loaders/Loader';

function Landing() {
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    // const { doRequest } = useRequest();
    // const { data } = await doRequest();
    // setArticles(data.news);
    setArticles([{ title: 'one' }, { title: 'two' }]);
  }, []);
  const renderNewsBox = () => {
    if (articles.length == 0) {
      return <Loader />;
    }
    return articles.map((el, index) => {
      return <div key={index}>{el.title}</div>;
    });
  };
  return (
    <div>
      <div>
        <Link to="/settings">Go to settings</Link>
      </div>
      {renderNewsBox()}
    </div>
  );
}
export default Landing;
