import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashbroad from "./pages/Dashbroad";
import Error from "./pages/Error";
import Landing from "./pages/Landing";
import Register from "./pages/Register";
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
   </>
  );
}

export default App;
