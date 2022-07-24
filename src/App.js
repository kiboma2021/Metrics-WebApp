/* eslint-disable no-unused-vars */
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Header from './Containers/Header';
import AllNews from './Containers/AllNews';
import NewsCategory from './Containers/NewsCategory';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<AllNews />} />
      <Route path="/product/:productid" element={<NewsCategory />} />
      <Route>404 Not Found</Route>
    </Routes>
  </Router>
);

export default App;
