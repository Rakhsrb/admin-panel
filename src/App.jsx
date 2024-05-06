import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import AddAdmin from "./pages/AddAdmin";
import AddCourses from "./pages/AddCourses";
import AddProjects from "./pages/AddProjects";
import AddServices from "./pages/AddServices";
import AddWorker from "./pages/AddWorker";
import { Admins } from "./pages/Admins";
import { Courses } from "./pages/Courses";
import { Dashboard } from "./pages/Dashboard";
import EditAdmin from "./pages/EditAdmin";
import EditCourse from "./pages/EditCourse";
import EditProject from "./pages/EditProject";
import EditService from "./pages/EditServices";
import EditWorker from "./pages/EditWorker";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/courses",
          element: <Courses />,
        },
        {
          path: "/services",
          element: <Services />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/admins",
          element: <Admins />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        //add paths
        {
          path: "/add-admin",
          element: <AddAdmin />,
        },
        {
          path: "/add-course",
          element: <AddCourses />,
        },
        {
          path: "/add-portfolio",
          element: <AddProjects />,
        },
        {
          path: "/add-service",
          element: <AddServices />,
        },
        {
          path: "/add-worker",
          element: <AddWorker />,
        },
        //edit paths
        {
          path: "/add-admin/:id",
          element: <EditAdmin />,
        },
        {
          path: "/add-course/:id",
          element: <EditCourse />,
        },
        {
          path: "/add-portfolio/:id",
          element: <EditProject />,
        },
        {
          path: "/add-service/:id",
          element: <EditService />,
        },
        {
          path: "/add-worker/:id",
          element: <EditWorker />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
