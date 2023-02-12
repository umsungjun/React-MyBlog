import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import TechPage from './components/TechPage';
import BlogPage from './components/BlogPage';


function App() {
  // root url : main page component
  // tech url : tech page component
  // blog url : blog page component
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
        <Route path={'/tech'} element={<TechPage />}></Route>
        <Route path={'/blog'} element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
