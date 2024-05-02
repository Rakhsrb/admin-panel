import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout/RootLayout";
import { Dashboard } from "./pages/Dashboard";
import { Courses } from "./pages/Courses";
import { Services } from "./pages/Services";
import { Projects } from "./pages/Projects";
import { Admins } from "./pages/Admins";
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
