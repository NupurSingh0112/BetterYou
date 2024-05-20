import React from "react";
import { Link } from "react-router-dom";

const Articles = ({ articles }) => {
  return (
    <>
      {articles.map((article, index) => (
        <div key={index} className=' bg-pink-200 p-4 w-[40%] '>
          <div className='h-full border-2 border-red-600 border-opacity-60 rounded-lg overflow-hidden shadow-red-700'>
            <Link to={`/article/${article.name}`}>
              <img
                className='lg:h-48 md:h-36 w-full object-cover object-center blur-[1px]'
                src={article.thumbnail}
                alt='blog'
              />
            </Link>
            <div className='p-6'>
              <Link key={index} to={`/article/${article.name}`}>
                <h3 className='text-lg font-bold font-medium text-red-900 mb-3'>
                  {article.title}
                </h3>
              </Link>
              <p className='leading-relaxed mb-3 text-red-900 font-semibold'>
                {article.content[0].substring(0, 110)}...
              </p>
              <div className='flex item-center flex-wrap'>
                <Link
                  className='text-red-600 inline-flex items-center md:mb-2 lg:mb-0'
                  to={`/article/${article.name}`}
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Articles;
