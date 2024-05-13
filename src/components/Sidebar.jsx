import {
  Books,
  Circuitry,
  Command,
  UserCircle,
  UserCircleGear,
  Users,
} from "@phosphor-icons/react";
import React from "react";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const navLinks = [
    {
      to: "/",
      title: "USER",
      icon: <UserCircle />,
    },
    {
      to: "/admins",
      title: "ADMINLAR",
      icon: <UserCircleGear />,
    },
    {
      to: "/courses",
      title: "KURSLAR",
      icon: <Books />,
    },
    {
      to: "/projects",
      title: "PORTFOLIO",
      icon: <Circuitry />,
    },
    {
      to: "/services",
      title: "XIZMATLAR",
      icon: <Command />,
    },
    {
      to: "/team",
      title: "XODIMLAR",
      icon: <Users />,
    },
  ];

  return (
    <aside className="bg-cyan-950">
      <ul className="flex flex-col">
        {navLinks.map((item, index) => (
          <li key={index + 1}>
            <NavLink
              to={item.to}
              className="flex items-center gap-2 text-xl text-white hover:bg-cyan-700 p-5"
            >
              {item.title} {item.icon}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
