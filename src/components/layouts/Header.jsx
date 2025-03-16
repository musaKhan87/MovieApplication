import { NavLink } from "react-router-dom";

export const Header=()=>{
    const getNavStyle=({isActive})=>{
        return{
            color:isActive?"#535bf2":""
        }
    }
    return(   
    <header className="section-navbar">
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="index">
              <p>MovieFlix</p>
            </NavLink>
          </div>

          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({isActive})=> isActive ?"nav-link active":"nav-link"}
                >
                  <p>Home</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/about" 
                    style={({isActive})=>{
                        return{
                            color:isActive?"#535bf2":""
                        }
                    }}
                  >
                  <p>about</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/movie"
                  className="nav-link"
                  style={getNavStyle}
                >
                  <p>movies</p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact" 
                  className="nav-link"
                >
                  <p>contact</p>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
   }