import { createBrowserRouter } from "react-router";
import LandingPage from "./features/landing/pages/LandingPage";
import SignUpPage from "./features/auth/pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />
  },
  {
    path: "/sign-up",
    element: <SignUpPage />
  }
])

export default router