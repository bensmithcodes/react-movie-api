import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, {useEffect, useState} from 'react';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';




const App=()=>{

  const [movies, setMovies] = useState([]);
  const [info,setInfo]= useState([]);
  const [searchValue, setSearchValue]= useState('');
const[favorites, setFavorites]=useState([]);
const getMovieRequest = async(searchValue)=>{
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=1fa1396d`
  const response = await fetch(url);
  const responseJson = await response.json();

  if(responseJson.Search){

  
  setMovies(responseJson.Search);
  }
}
useEffect(()=>{
  getMovieRequest(searchValue);
}, [searchValue]);



  return (
    <div className='container-fluid movie-app'>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading='Movies!'/>
        <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
        <div className='row'>

        </div>
    <MovieList movies ={movies}/> 
    /</div>
    <div className='row d-flex align-items-center mt-4 mb-4'>
      <br></br>
        <MovieListHeading heading='Movies!'/>
</div> 
   
  </div>)
}
export default App;
