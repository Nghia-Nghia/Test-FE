import { createBrowserRouter } from "react-router-dom";
import Onboarding from "@pages/onboarding/onboarding.tsx";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Onboarding />,
    children: []
  }
]);
