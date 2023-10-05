import React from "react";
import "./Header.css";
import { NavLink, Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <div className="header_info">
          <div className="notification">n</div>
          <div className="profile_icon">P_I</div>
        </div>
        <div className="header_search">
        Search
        </div>
        <nav className="header_routing">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/watch">Watch</NavLink>
          <NavLink to="/community">Community</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>Footer</footer>
    </>
  );
}
export default Header;
