import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Header from './Containers/Header';
import allNews from './Containers/AllNews';
import newsCategory from './Containers/NewsCategory';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<allNews />} />
      <Route path="/product/:productid" element={<newsCategory />} />
      <Route>404 Not Found</Route>
    </Routes>
  </Router>
);

export default App;
