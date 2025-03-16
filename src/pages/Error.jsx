import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  const nevigate=useNavigate()
  
  const handleGoBack=()=>{
    nevigate(-1)
  }

  if (error.status === 404) {
    return (
      <section className="error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        <NavLink to="/" className="btn" style={{marginBottom:"6px"}}>
          Go Back To HomePage
        </NavLink>
        <button className="btn" onClick={handleGoBack}>Go Back</button>
      </section>
    );
  }

  return <h1>{error.status}</h1>;
};
