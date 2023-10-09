import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import PersonalInfo from "../Pages/PersonalInfo/PersonalInfo/PersonalInfo";
import FormPage from "../Pages/Form/FormPage";
import Dashboard from "../Layouts/Dashboard";
import FolderPage from "../Pages/FolderPgae/FolderPage";
import BusinessForm from "../Pages/BusinessForm/BusinessForm";
import FormPage2 from "../Pages/Form/FormPage2";
import AdminPage from "../Pages/AdminPage/AdminPage/AdminPage";
import ErrorPage from "../Shared/ErrorPage/ErrorPage";
import CategoryDescription from "../Pages/AdminPage/CategorySetUp/CategoryDescription";
import Slabs from "../Pages/AdminPage/SlabsSetup/Slabs";
import LoginPage from "../Pages/LoginPage/LoginPage";
import SignupPage from "../Pages/SignupPage/SignupPage";
import PdfTest from "../Pages/PdfTest/PdfTest";
import ReportPage from "../Pages/ReportPage/ReportPage";
import SalarySchema from "../Pages/ReportSchema/SalarySchema";
import PrivateRoute from "./PrivateRoute";
import ReturnSchema from "../Pages/ReportSchema/ReturnSchema";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Main></Main>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
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
            path: "/dashboard/form/:category_name",
            element: <FormPage></FormPage>,
            loader: ({ params }) => {
              return fetch(
                `http://127.0.0.1:8000/api/v1/category-setup-list/${params.category_name}/`,
                {
                  method: "GET",
                  headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem(
                      "accessToken"
                    )}`,
                  },
                }
              );
            },
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
      {
        path: "/admin",
        element: <AdminPage></AdminPage>,
      },
      {
        path: "/categorySetup",
        element: <CategoryDescription></CategoryDescription>,
      },
      {
        path: "/categorySetup/:category_name/:description",
        element: <CategoryDescription></CategoryDescription>,
        loader: ({ params }) => {
          return fetch(
            `http://127.0.0.1:8000/api/v1/category-retrieve/${params.category_name}/${params.description}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
        },
      },
      {
        path: "/slabs",
        element: <Slabs></Slabs>,
      },
      {
        path: "/report",
        element: <ReportPage></ReportPage>,
      },
      {
        path: "/report/salarySchema",
        element: <SalarySchema></SalarySchema>,
        loader: () => {
          return fetch(`http://127.0.0.1:8000/api/v1/salary-report/`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
        },
      },
      {
        path: "/report/returnSchema",
        element: <ReturnSchema></ReturnSchema>,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/pdf",
    element: <PdfTest></PdfTest>,
  },
]);
