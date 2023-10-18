import { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import "./Navbar.css";
import logo from '../../assets/logo.jpeg'
const Navbar = () => {
  const [mobile, setMobile] = useState(false);
  return (
    <header>
      <nav>
        <h2 className="brand">
          <Link className="link" to={"/"}>
          <img src={logo} alt="logo" />
          </Link>
        </h2>
        <ul className={mobile ? "navListActive" : "navList"}>
          <li className="navListItem">
            <Link className="link" to={"/"}>
              Home
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/activeUsers"}>
              Secd frrvices
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/profile"}>
              Projects
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/profile"}>
              FAQS
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/profile"}>
              About Us
            </Link>
          </li>
          <li className="navListItem">
            <Link className="link" to={"/register"}>
              Register
            </Link>
          </li>

          <button className="btn">
            <Link className="link-btn" to={"/login"}>
              Log In
            </Link>
          </button>
        </ul>
        <div
          className="icons"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? (
            <CgClose className="close" />
          ) : (
            <CgMenuGridO className="open" />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
