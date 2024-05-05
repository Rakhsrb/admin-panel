import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import AddAdmin from "./pages/AddAdmin";
import { Admins } from "./pages/Admins";
import { Courses } from "./pages/Courses";
import { Dashboard } from "./pages/Dashboard";
import { Projects } from "./pages/Projects";
import { Services } from "./pages/Services";
import { Team } from "./pages/Team";
import AddCourses from "./pages/AddCourses";
import AddProjects from "./pages/AddProjects";
import AddServices from "./pages/AddServices";
import AddTeam from "./pages/AddTeam";

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
          element: <AddTeam />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
