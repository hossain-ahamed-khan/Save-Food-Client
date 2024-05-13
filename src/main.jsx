import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import AuthProvider from './Providers/AuthProvider.jsx';
import Root from './routes/Root.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import HomePage from './pages/HomePage.jsx';
import Login from './pages/Login.jsx';
import Signup from './pages/Signup.jsx';
import AvailableFoods from './pages/AvailableFoods';
import AddFood from './pages/AddFood.jsx';
import ManageMyFoods from './pages/ManageMyFoods.jsx';
import MyFoodRequest from './pages/MyFoodRequest.jsx';
import FoodDetails from './pages/FoodDetails.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
        loader: () => fetch("https://save-food-server.vercel.app/foods")
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
        loader: () => fetch("https://save-food-server.vercel.app/foods")
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>
      },
      {
        path: "/food/:id",
        element: <FoodDetails></FoodDetails>
      },
      {
        path: "/manage-my-foods",
        element: <ManageMyFoods></ManageMyFoods>
      },
      {
        path: "/my-food-request",
        element: <MyFoodRequest></MyFoodRequest>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <Signup></Signup>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
