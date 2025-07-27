// routes.js
import Home from "./pages/Home";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import ErrorPage from "./pages/ErrorPage";

const routes = [
  { path: "/", element: <Home />, errorElement: <ErrorPage /> },
  { path: "/about", element: <About />, errorElement: <ErrorPage /> },
  { path: "/profile/:id", element: <UserProfile />, errorElement: <ErrorPage /> },
];

export default routes;
