import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RateCalculator from "./pages/RateCalculator";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RateCalculator />,
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
