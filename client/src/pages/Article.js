import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articleContent from "./article-content";

// Pages
import NotFound from "./NotFound";

// Components
import Articles from "../components/Articles";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";

const Article = () => {
  const { name } = useParams();
  const article = articleContent.find((article) => article.name === name);
  const [articleInfo, setArticleInfo] = useState({ comments: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(`/api/articles/${name}`);
      const body = await result.json();
      console.log(body);
      setArticleInfo(body);
    };
    fetchData();
  }, [name]);

  if (!article) return <NotFound />;
  const otherArticles = articleContent.filter(
    (article) => article.name !== name
  );
  return (
    <div className="w-[80%] relative top-15   p-20 ml-[10vw] text-justify bg-rose-100 bg-opacity-2">
      <h1 className='sm:text-4xl text-3xl font-bold my-6 text-red-900 font-serif text-center shadow-sm shadow-red-500'>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-normal text-base font-serif font-medium text-3xl mt-10 mb-4 text-red-800' key={index}>
          {paragraph}
        </p>
      ))}
      <CommentsList comments={articleInfo.comments} />
      <AddCommentForm articleName={name} setArticleInfo={setArticleInfo} />
      <h1 className='text-4xl font-serif   text-center font-bold my-4 mt-20 mb-20 text-red-900'>
      Other Articles:
      </h1>
      <div className=' bg-red-400 flex mx-20 flex-wrap justify-between gap-10 -m-4'>
        <Articles articles={otherArticles} />
      </div>
    </div>
  );
};

export default Article;
