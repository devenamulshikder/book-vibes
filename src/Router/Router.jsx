import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import ListedBooks from "../Pages/ListedBooks";
import PagesToRead from "../Pages/PagesToRead";
import DetailsBooks from "../components/DetailsBooks";
import ReadBooks from "../components/ReadBooks";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/listed-books",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/pages-read",
        element:<PagesToRead></PagesToRead>
      },
      {
        path:'/details-books/:id',
        loader:()=>fetch('../data.json'),
        element:<DetailsBooks></DetailsBooks>
      },
      {
        path:'/top-books',
        loader:()=>fetch('../readBook.json'),
        element:<ReadBooks></ReadBooks>
      }
    ],
  },
]);
export default router;
