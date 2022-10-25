import Hero from "./hero";

const AboutView = () => {
    return(
      <div>
        <Hero text="About us"/>
          <div className="container">
          <div className="row"> 
          <div className="col-lg-12 text-center font-link lead text-dark">
          <p>
            This database contains thousands of movies of varying genes. Each movie included in this database contains an image and a synopsis. </p>
          <p>
            Use the search bar to see whether a movie you are curious about is included within the database.
          </p>
          <p>
            Coming Soon: TV Shows.
          </p>
          </div>
          </div>
        </div>
      </div>
    )
  }


  export default AboutView;




  