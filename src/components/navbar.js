import { useNavigate, Link } from "react-router-dom";


const Navbar = ({ searchText, setSearchText }) => {
const navigate = useNavigate()

  const updateSearchText = (e) => {
    navigate('/search')
    setSearchText(e.target.value)
  }

  const submitSearch = e => {
    e.preventDefault();
    setSearchText(searchText);
  }
  

  return (
    <nav className="navbar navbar-expand-lg bg-white text-dark font-link sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          KATIE'S MOVIE BROWSER
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="gotosomewherenavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/about">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link disabled fw-lighter"
                to="/"
                tabIndex="-1"
                aria-disabled="true"
              >
                COMING SOON
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search" 
              value={searchText}
              onChange={updateSearchText}
              onSubmit={submitSearch}
            />
            <button 
            className="btn btn-outline-success" 
            type="submit" 
            onSubmit={submitSearch}> Search</button>
            
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
