const Hero = ( {text, backdrop} ) => {
    return(
      <header className=" text-danger p-5 hero-container font-link text-center">
        <h1 className="hero-text">{text}</h1>
        {backdrop && 
        <div className="hero-backdrop" style={{backgroundImage: `url(${backdrop})`}}></div> 
        }
      </header>
    )
  }


  export default Hero;