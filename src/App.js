import {
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { router } from "./ultils/router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position='top-center' ></ToastContainer>
    </>
  );
}

export default App;
