// 
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import articles from './article-content.js'; // Importing articles array

const AdminDashboard = () => {
  const [fetchedArticles, setFetchedArticles] = useState([]);
  const [newArticle, setNewArticle] = useState({
    name: '',
    title: '',
    thumbnail: '',
    content: [''],
  });

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await axios.get('/api/articles');
      setFetchedArticles(response.data);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  };

  const addArticle = async () => {
    try {
      const response = await axios.post('/api/articles', newArticle);
      setFetchedArticles([...fetchedArticles, response.data]);
      setNewArticle({ name: '', title: '', thumbnail: '', content: [''] }); // Reset form
    } catch (error) {
      console.error('Error adding article:', error);
    }
  };

  const updateArticle = async (name) => {
    try {
      const response = await axios.put(`/api/articles/${name}`, newArticle);
      setFetchedArticles(fetchedArticles.map(article => article.name === name ? response.data : article));
    } catch (error) {
      console.error('Error updating article:', error);
    }
  };

  const deleteArticle = async (name) => {
    try {
      await axios.delete(`/api/articles/${name}`);
      setFetchedArticles(fetchedArticles.filter(article => article.name !== name));
    } catch (error) {
      console.error('Error deleting article:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewArticle({ ...newArticle, [name]: value });
  };

  const handleContentChange = (index, value) => {
    const newContent = [...newArticle.content];
    newContent[index] = value;
    setNewArticle({ ...newArticle, content: newContent });
  };

  return (
    <div className='absolute top-18 w-[100%] h-[100%] bg-red-100 flex flex-col'>
      <div className='w-[100%] h-auto text-4xl text-red-900'>
        <h1 className=' text-center font-bold font-serif'>Admin Dashboard</h1> <br/>
        <h2 className='text-center font-serif'>Add / Update Article</h2>
      </div>
      <input className='w-[20%] h-20 border-red-800 shadow-xl mt-10 mb-5 ml-[40%] placeholder-red-700 ' type="text" name="name" placeholder="Name" value={newArticle.name} onChange={handleInputChange} />
      <input className='w-[20%] h-20 border-red-800 shadow-xl mt-5 mb-5 ml-[40%] placeholder-red-700 ' type="text" name="title" placeholder="Title" value={newArticle.title} onChange={handleInputChange} />
      <input className='w-[20%] h-20 border-red-800 shadow-xl mt-5 mb-5 ml-[40%] placeholder-red-700 ' type="text" name="thumbnail" placeholder="Thumbnail URL" value={newArticle.thumbnail} onChange={handleInputChange} />
      {newArticle.content.map((paragraph, index) => (
        <textarea className='w-[100%] h-[100%] border-red-800 shadow-xl mt-5 mb-5 ml-[10%] placeholder-red-700 '
          key={index}
          placeholder={`Content ${index + 1}`}
          value={paragraph}
          onChange={(e) => handleContentChange(index, e.target.value)}
        />
      ))}
      <button className='w-[20vw] h-[20vh] bg-red-500 hover:bg-red-900 ml-[40vw] shadow-red-700 shadow-lg mb-10 mt-10' onClick={addArticle}>Add Article</button>
      <button className='w-[20vw] h-[20vh] bg-red-500 hover:bg-red-900 ml-[40vw] shadow-red-700 shadow-lg ' onClick={() => updateArticle(newArticle.name)}>Update Article</button>
      <div className='flex mt-20 flex-col'>
        <h2 className='text-2xl font-bold text-red-900 font-serif  mb-20 mb-10 text-center'>Existing Articles:</h2>
        <div className='flex flex-row pl-20  bg-red-100 text-red-800 font-medium font-serif justify-center'>
            <ul className='mt-5'>
        {articles.map((article) => (
          <li key={article.name} className='mb-5 flex flex-col'>
            <h3 className='text-xl font-semibold'>{article.title}</h3>
            <img className='mt-5 mb-5 ml-36' src={article.thumbnail} alt={article.title} width="100" />
            <button className='bg-red-500 hover:bg-red-900 text-white px-4 py-2' onClick={() => deleteArticle(article.name)}>Delete</button>
          </li>
        ))}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
