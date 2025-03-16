import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Movie } from "./pages/Movie"
import { Contact, contactData } from "./pages/Contact"
import AppLayout from "./components/layouts/AppLayout"
import "./App.css"
import { ErrorPage } from "./pages/Error"
import { MovieDetails } from "./components/UI/MovieDetails"
import { getMovieDetailsData } from "./api/MovieaDetailsData"
import { getApiData } from "./api/GetApiData"


function App() {
  const router=createBrowserRouter([
    {
      path:"/",
      element:<AppLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"movie",
          element:<Movie/>,
          loader:getApiData
        },
        {
          path:"movie/:movieID",
          element:<MovieDetails/>,
          loader:getMovieDetailsData
        },
        {
          path:"contact",
          element:<Contact/>,
          action:contactData
        }
      ]
    }
  ])


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
