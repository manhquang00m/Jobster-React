import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashbroad from "./pages/Dashbroad";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashbroad></Dashbroad>,
  },
  {
    path: "landing",
    element: <Landing></Landing>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' ></ToastContainer>
    </>
  );
}

export default App;
