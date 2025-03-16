import { FaSearch, FaInfoCircle, FaFilm, FaListUl, FaBullseye, FaBolt } from "react-icons/fa";

export const About=()=>{
    return (
        <div className="about-container">
            <h1 className="about-title">About MovieFlix</h1>
            <p className="about-subtitle">
                Discover a vast collection of movies, view details, and explore trending films with our platform powered by the <b>OMDb API</b>.
            </p>

            {/* Features Section */}
            <div className="about-section">
                <h2 className="section-title"><FaBolt /> Features</h2>
                <ul className="about-list">
                    <li><FaSearch className="list-icon" /> <b>Search</b> for movies by title</li>
                    <li><FaInfoCircle className="list-icon" /> <b>View</b> detailed movie information</li>
                    <li><FaFilm className="list-icon" /> <b>Explore</b> movies across different genres</li>
                    <li><FaListUl className="list-icon" /> <b>Paginated</b> movie listings</li>
                </ul>
            </div>

            {/* Mission Section */}
            <div className="about-section">
                <h2 className="section-title"><FaBullseye /> Our Mission</h2>
                <p className="about-text">
                    Our goal is to create an intuitive and user-friendly movie browsing experience where you can effortlessly
                    discover, explore, and learn about your favorite films.
                </p>
            </div>

            {/* Powered By Section */}
            <div className="about-section">
                <h2 className="section-title"><FaBolt /> Powered By</h2>
                <p className="about-text"><b>OMDb API</b> - Open Movie Database</p>
            </div>
        </div>
    );
}