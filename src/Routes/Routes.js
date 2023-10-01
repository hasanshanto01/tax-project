import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import PersonalInfo from "../Pages/PersonalInfo/PersonalInfo/PersonalInfo";
import FormPage from "../Pages/Form/FormPage";
import Dashboard from "../Layouts/Dashboard";
import FolderPage from "../Pages/FolderPgae/FolderPage";
import BusinessForm from "../Pages/BusinessForm/BusinessForm";
import FormPage2 from "../Pages/Form/FormPage2";

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
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <FolderPage></FolderPage>,
          },
          {
            path: "/dashboard/form/:id",
            element: <FormPage></FormPage>,
          },
          {
            path: "/dashboard/form2/:id",
            element: <FormPage2></FormPage2>,
          },
          {
            path: "/dashboard/businessForm",
            element: <BusinessForm></BusinessForm>,
          },
        ],
      },
      {
        path: "/personalInfo",
        element: <PersonalInfo></PersonalInfo>,
      },
    ],
  },
]);
