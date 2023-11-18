import Login from './pages/Login'
import About from './pages/About'
import Signup from './pages/Signup'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Product from './pages/Product/index.jsx'
import "./App.css";

//Código para uso de contexto
import userContext from './context/userContext.js'
import { useState } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
]);

function App() {
  const [user, setUser] = useState(false)
  return (
    <>
      <userContext.Provider value={{user,setUser}}>
        <RouterProvider router={router} />
      </userContext.Provider>
    </>
  );
}

export default App;
