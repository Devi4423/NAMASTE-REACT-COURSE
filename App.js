import ReactDOM from "react-dom/client";
import Navbar from "./src/components/Navbar";
import Body from "./src/components/Body";
import {
  BrowserRouter,
  createBrowserRouter,
  Outlet,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import ErrorPage from "./src/components/ErrorPage";
import Cart from "./src/components/Cart";
import RestaurantMenu from "./src/components/RestaurantMenu";
import { lazy, Suspense, useEffect, useState } from "react";
import UserContext from "./src/utility/UserContext";

const Grocery = lazy(()=>import("./src/components/Grocery"))

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {

  const [userName,setUsername] = useState();

  //update the user context od UserContext 

  useEffect(()=>{
    const userData = {
      name:"Gayathri Devi"
    }
    setUsername(userData.name)
  },[])

  return (
    //    <BrowserRouter>
    //         <Navbar/>
    //         <Routes>
    //             <Route path="/" element={<Body />}/>
    //             <Route path="/about" element={<About/>}/>
    //             <Route path="/contact" element={<Contact/>}/>
    //         </Routes>
    //    </BrowserRouter>
    
    <UserContext.Provider value={{loggedInUser:userName, setUsername }}>
      <Navbar />
      <Outlet />
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <Body />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/grocery",
          element: 
            <Suspense fallback={<h1>Loading...</h1>}>
              <Grocery/>
            </Suspense>
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu />,
        },
      ],
    },
  ]
);

root.render(<RouterProvider router={appRouter} />);
