
import './App.css';
import { useState, useEffect} from 'react';
import Navbar from './components/navbar';
import Home from './components/home';
import AboutView from './components/about'
import SearchView from './components/searchview';
import { Route, Routes } from 'react-router-dom';
import MovieView from './components/movieview'
import PageNotFound from "./components/pagenotfound";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    
    if(searchText) {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=60930e386095a504570395d072e51ed2&language=en-US&query=${searchText}&page=1&include_adult=false`)
    .then(response => response.json())
    .then(data => {
      setSearchResults(data.results)
      })
    }

    }, [searchText])

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route path="/about" element={<AboutView />}/>
      <Route path="/search" element={<SearchView keyword={searchText} searchResults={searchResults}/>}/>
      <Route path="/movies/:id" element={<MovieView />}/>
      <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
