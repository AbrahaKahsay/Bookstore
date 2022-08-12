import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
function App() {
  return (
    <>
    <nav>
      <header className="books-header">
        <h1> Bookstore CMS</h1>
      </header>
      <ul>
        <li><Link to='/'>Books</Link></li>
        <li><Link to='/categories'>Categories</Link></li>
      </ul>
    </nav>
     <Routes>
      <Route path='/' element={<Books />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
    </>
   
  );
}

export default App;
