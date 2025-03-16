export const Footer = () => {
  return (
    <footer className="section-footer">
      <div className="footer-container container">
        <div className="content_1">
        <h4>MovieFlix</h4>
          <p>
            Welcome to MovieFlix, your ultimate destination for the latest and greatest in cinema!
          </p>
          <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div className="content_2">
          <h4>TOP MOVIES</h4>
          <a href="#">The Dark Knight</a>
          <a href="#">Inception</a>
          <a href="#">Interstellar</a>
          <a href="#">The Godfather</a>
        </div>
        <div className="content_3">
          <h4>MOVIE GENRES</h4>
          <a href="#">Action</a>
          <a href="#">Drama</a>
          <a href="#">Sci-Fi</a>
          <a href="#">Thriller</a>
        </div>
        <div className="content_4">
          <h4>NEWSLETTER</h4>
          <p>
            Be the first to know about new
            <br />
            movie releases, special events & exclusive deals!
          </p>
          <div className="f-mail">
            <input type="email" placeholder="Your Email" />
            <i className="bx bx-envelope"></i>
          </div>
          <hr />
        </div>
      </div>
     
      <div className="f-design">
        <div className="f-design-txt">
          <p>Designed and Developed by MovieFlix</p>
        </div>
      </div>
    </footer>
  );
};
