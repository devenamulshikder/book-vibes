import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<Error></Error>,
    element: <MainLayout></MainLayout>,
    children:[
        {
            
        }
    ]
  },
]);
export default router