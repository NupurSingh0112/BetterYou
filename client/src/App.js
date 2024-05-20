import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Pages
import Home from "./pages/Home";
import ArticlesList from "./pages/ArticlesList";
import Article from "./pages/Article";
import NotFound from "./pages/NotFound";

// Components
import Navbar from "./components/Navbar";
import AdminDashboard from "./pages/AdminDashboard";
import AskQuestion from "./pages/AskQuestion";

function App() {
  return (
    <Router>
      <Navbar />
      <div className='max-w-screen'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/articles-list' element={<ArticlesList />} />
          <Route path='/article/:name' element={<Article />} />
          <Route path='/AdminDashboard.js' element={<AdminDashboard />} />
          <Route path='/AskQuestion' element={<AskQuestion />}/>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
