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

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    //    <BrowserRouter>
    //         <Navbar/>
    //         <Routes>
    //             <Route path="/" element={<Body />}/>
    //             <Route path="/about" element={<About/>}/>
    //             <Route path="/contact" element={<Contact/>}/>
    //         </Routes>
    //    </BrowserRouter>

    <>
      <Navbar />
      <Outlet />
    </>
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
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/restaurant/:id",
          element: <RestaurantMenu />,
        },
      ],
    },
  ],
  { future: { v7_startTransition: true } },
);

root.render(<RouterProvider router={appRouter} />);
