
import Hero from "./hero";
import { Link } from 'react-router-dom'


// TMDB API key: 60930e386095a504570395d072e51ed2



const MovieCard = ({ movie }) => {
    const posterURL = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    const detailUrl = `/movies/${movie.id}`
    

    return (
        <div className="col-lg-3 col-md-3 col-2 my-4 p-2">
            <div className="card h-100">
                <img src={posterURL} className="card-img-top" alt={movie.original_title}      
                onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src =
                    "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930";
                }}/>
                <div className="card-body">
                <h5 className="card-title">{movie.original_title}</h5>
                
                <Link to={detailUrl} className="btn btn-danger">View Movie Details</Link>
                </div>
            </div>
        </div>    
        )}



const SearchView = ({ keyword, searchResults}) => {
    const title = `You are searching for... ${keyword}`
    const noResults = `Sorry ${keyword} does not exist. Please try searching something else.`
    const resultsHTML = searchResults.map((obj, i) => {
        return <MovieCard movie={obj} key={i}/>
    })
    

    return(
        <div>
            <Hero text={title}/>
            {resultsHTML && 
                <div className="container">
                    <div className="row">
                        {resultsHTML}
                    </div>
                </div>
            }
            <div className="container">
                <div className="text-center text-danger font-link">{noResults}</div>
            </div>
        </div>
    )
}

export default SearchView;
