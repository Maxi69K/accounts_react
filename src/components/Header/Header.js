import React from "react"
import { Link, NavLink } from "react-router-dom"
import styles from "./Header.module.css"

const Header = () => {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand">Accounts Application</Link>
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  'nav-link ' + (isActive ? styles.active : '')
                }
              >
                Accounts
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/add"
                className={({ isActive }) =>
                  'nav-link ' + (isActive ? styles.active : '')
                }
              >
                Add Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/edit"
                className={({ isActive }) =>
                  'nav-link ' + (isActive ? styles.active : '')
                }
              >
                Edit/Delete
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Header