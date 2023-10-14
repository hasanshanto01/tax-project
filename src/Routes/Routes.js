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
import DynamicForm from "../Pages/OTP/DynamicForm";
import TestForm from "../Pages/OTP/TestForm";
import ActiveReport from "../Pages/OTP/ActiveReport";
<<<<<<< HEAD

// const baseURL = `http://127.0.0.1:8000/api/v1`;
const baseURL = `http://62.171.179.61:8000/api/v1`;
=======
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649

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
                `${baseURL}/category-setup-list/${params.category_name}/`,
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
        loader: () => {
<<<<<<< HEAD
          return fetch(`${baseURL}/personal-details/`, {
=======
          return fetch(`http://127.0.0.1:8000/api/v1/personal-details/`, {
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
        },
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
            `${baseURL}/category-retrieve/${params.category_name}/${params.description}`,
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
        path: "/slabs/:id",
        element: <Slabs></Slabs>,
        loader: ({ params }) => {
<<<<<<< HEAD
          return fetch(`${baseURL}/slab-retrieve/${params.id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
=======
          return fetch(
            `http://127.0.0.1:8000/api/v1/slab-retrieve/${params.id}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
              },
            }
          );
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
        },
      },
      {
        path: "/report",
        element: <ReportPage></ReportPage>,
      },
      {
        path: "/report/salarySchema",
        element: <SalarySchema></SalarySchema>,
        loader: () => {
          return fetch(`${baseURL}/salary-report/`, {
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
        loader: () => {
<<<<<<< HEAD
          return fetch(`${baseURL}/return/`, {
=======
          return fetch(`http://127.0.0.1:8000/api/v1/return/`, {
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          });
        },
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
  {
    path: "/dynamicform",
    element: <DynamicForm></DynamicForm>,
  },
  {
    path: "/testform",
    element: <TestForm></TestForm>,
  },
  {
    path: "/demoreport",
    element: <ActiveReport></ActiveReport>,
    loader: () => {
<<<<<<< HEAD
      return fetch(`${baseURL}/return/`, {
=======
      return fetch(`http://127.0.0.1:8000/api/v1/return/`, {
>>>>>>> cf242599516b441b1ccffdf620230c388b15b649
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
    },
  },
]);
