import React from "react";
import { Link, Outlet } from "react-router-dom";

export const DashBoard = () => {
  return (
    <>
      <aside >
        <ul>
          <li><Link to="peliculas">peliculas</Link> </li>
          <li><Link to="sedes">Sedes</Link> </li>
        </ul>
      </aside>

      <section className="DashBoard">
      <Outlet />
      </section>
    </>
  );
};
