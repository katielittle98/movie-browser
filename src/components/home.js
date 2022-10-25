import Hero from "./hero";
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div>
      <Hero text="WELCOME TO MY MOVIE BROWSER"/>
      <div className="container">
        <div className="row"> 
        <div className="position-absolute start-0 ps-5">
            <div className="font-link">
                <div className="container">
                  <div className="row">
                    <div className="col text-center text-dark">TRENDING NOW</div>
                  </div>
                  <div className="row">
                    <div className="col">
                        
                    <div className="card h-100" >
                      <img src="http://image.tmdb.org/t/p/w500//wuMc08IPKEatf9rnMNXvIDxqP4W.jpg" class="card-img-top image-details" alt="not-available" />
                      <div className="card-body">
                        <h5 className="card-title text-danger fw-bolder">Harry Potter and the Philosopher's Stone</h5>
                        <Link to={'/movies/671'} className="btn btn-danger">View Movie Details</Link>
                        
                      </div>
                    </div>
                        
                    </div>
                    <div className="col">
                    <div className="card h-100" >
                      <img src="https://image.tmdb.org/t/p/w500//wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg" class="card-img-top image-details" alt="not-available" />
                      <div className="card-body">
                      <h5 className="card-title text-danger fw-bolder">Star Wars: The Force Awakens</h5>
                      <Link to={'/movies/140607'} className="btn btn-danger">View Movie Details</Link>
                      </div>
                  </div>
                    </div>
                    <div className="col">
                    <div className="card h-100" >
                    <img src="https://image.tmdb.org/t/p/w500//or06FN3Dka5tukK1e9sl16pB3iy.jpg" class="card-img-top image-details" alt="not-available" />
                    <div className="card-body">
                    <h5 className="card-title text-danger fw-bolder">Avengers: Endgame</h5>
                    <Link to={'/movies/299534'} className="btn btn-danger">View Movie Details</Link>
                    </div>
                  
                  </div>
                    </div>
                    <div className="col">
                    <div className="card h-100" >
                    <img src="https://image.tmdb.org/t/p/w500//9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg" class="card-img-top image-details" alt="not-available" />
                    <div className="card-body">
                    <h5 className="card-title text-danger fw-bolder">Titanic</h5>
                    <Link to={'/movies/597'} className="btn btn-danger">View Movie Details</Link>
                    </div>
                  </div>
                    </div>
                  </div>
              </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}


export default Home;