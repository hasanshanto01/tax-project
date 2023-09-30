import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import PersonalInfo from "../Pages/PersonalInfo/PersonalInfo/PersonalInfo";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/personalInfo",
        element: <PersonalInfo></PersonalInfo>,
      },
    ],
  },
]);
