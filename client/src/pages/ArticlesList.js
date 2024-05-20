import React from "react";
import articleContent from "./article-content";

// Components
import Articles from "../components/Articles";

const ArticlesList = () => {
  return (
    
    <div className="w-[100%] min-h-[300%] bg-pink-100 mb-0">
    <div className="relative top-10 bg-[#F4B5A2] w-[80%] max-h-[100%] ml-[10vw] mr-[10vw]">
      <h1 className='sm:text-4xl text-2xl font-bold text-center my-6 mx-10 text-red-900'>
        articles for different concerns
      </h1>
      <div className='container flex py-4 mx-auto'>
        <div className='flex flex-wrap gap-5 shadow-red-700 w-[100%]
         items-center justify-evenly'>
          <Articles articles={articleContent} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default ArticlesList;
