import React from 'react';
import { useEffect, useState } from 'react';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// @TODO: remove test data in production

import { test_data } from '../test-data';
import { useRequest } from '../../hooks/useRequest';
import { Loader } from './Loaders/Loader';
import { renderPlaceHolder } from './Loaders/PlaceHolderScreen';

function Landing() {
  const [articles, setArticles] = useState([]);
  useEffect(async () => {
    // const { doRequest } = useRequest();
    // const { data } = await doRequest();
    // setArticles(data.news);
    setArticles(JSON.parse(test_data).news);
  }, []);
  const renderNewsBox = () => {
    if (articles.length == 0) {
      return renderPlaceHolder;
    }
    return articles.map((el, index) => {
      return (
        <div
          className={`news-box-container mb-2 p-2 container-${index} shadow-sm hover:shadow-lg duration-500`}
          key={index}
        >
          <div className="flex justify-center items-center">
            <img
              height="300px"
              width="200px"
              className="rounded-md "
              src={el.image}
            />
          </div>
          <div>
            <h1 className="news-box-title">{el.title}</h1>
            <hr />
            <p className="mt-5 news-box-description">
              {el.description.slice(0, el.description.length / 2)}....
            </p>
          </div>
          <div>
            <a
              className="hover:underline hover:text-blue-400 more"
              href={el.url}
            >
              Read More{' '}
              {index == 0 || index == articles.length - 1 ? (
                <DoubleArrowIcon />
              ) : (
                <KeyboardArrowRightIcon />
              )}
            </a>
          </div>
          <div className="test">
            <div className="flex flex-col">
              <p className="text-gray-500 author-name">
                Author:{' '}
                <span className="text-xl">
                  {el.author ? el.author : 'Rahul R'}
                </span>
              </p>
              <p className="text-gray-500 hashtags">
                hashtags:
                {el.category.map((el, ind) => (
                  <span className="text-indigo-700 underline mr-2" key={ind}>
                    #{el}
                  </span>
                ))}
              </p>
            </div>
          </div>
        </div>
      );
    });
  };
  return (
    <div>
      {/* @TODO: check settings page last */}

      <div>{/* <Link to="/settings">Go to settings</Link> */}</div>
      <div className={articles.length != 0 ? `news-box mt-2` : ''}>
        {renderNewsBox()}
      </div>
    </div>
  );
}
export default Landing;
