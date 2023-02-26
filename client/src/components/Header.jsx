import React from "react";
import { FaCrown } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../assets/img";
import { firebaseAuth } from "../config/firebase";
import { useStateValue } from "../context/StateProvider";
import { motion } from "framer-motion";
import { isActiveStyles, isNotActiveStyles } from "../utils/styles";
import { useState } from "react";
import { useUserContext } from "../context/UserContext";
import styles from "../scss/header.module.scss";
import { IoAppsSharp } from "react-icons/io5";
import TitleHeader from "./TitleHeader";

import { AiOutlineClose, AiOutlineHome } from "react-icons/ai";
import { BsMusicNoteList } from "react-icons/bs";
import { IoDiamondOutline, IoPeopleOutline } from "react-icons/io5";

const Header = () => {
  const { createUser } = useUserContext();

  const [{ user }] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const navigate = useNavigate();

  const [title, setTitle] = useState(false);

  const logOut = () => {
    // const firebaseAuth = getAuth(app);
    firebaseAuth
      .signOut()
      .then(() => {
        window.localStorage.setItem("auth", "false");
      })
      .catch((e) => console.log(e));
    navigate("/login", { replace: true });
  };
  const handleTitle = () => {
    setTitle(!title);
  };
  return (
    <header className="flex top-0 left-0 right-0 items-center w-full p-4 md:py-2 md:px-6 bg-headerColor h-24">
      <NavLink to={"/Home"}>
        <img src={Logo} alt="Logo" className={styles.logo} />
      </NavLink>
      <div className={styles.iconTitle}>
        <IoAppsSharp onClick={handleTitle} />
        {title && (
          <div className={styles.nav}>
            <AiOutlineClose
              className={styles.iconClose}
              onClick={handleTitle}
            />
            <ul>
              <li className={styles.navTablet}>
                <NavLink
                  to={"/Home"}
                  className={({ isActive }) =>
                    isActive ? isActiveStyles : isNotActiveStyles
                  }
                >
                  <div>
                    <AiOutlineHome className={styles.icon} />
                    <span>Home</span>
                  </div>
                </NavLink>
              </li>
              <li className={styles.navTablet}>
                <NavLink
                  to={"/Musics"}
                  className={({ isActive }) =>
                    isActive ? isActiveStyles : isNotActiveStyles
                  }
                >
                  <div>
                    {" "}
                    <BsMusicNoteList className={styles.icon} />
                    <span> Music</span>
                  </div>
                </NavLink>
              </li>
              <li className={styles.navTablet}>
                <NavLink
                  to={"/Premium"}
                  className={({ isActive }) =>
                    isActive ? isActiveStyles : isNotActiveStyles
                  }
                >
                  <div>
                    {" "}
                    <IoDiamondOutline className={styles.icon} />
                    <span>Premium</span>
                  </div>
                </NavLink>
              </li>
              <li className={styles.navTablet}>
                <NavLink
                  to={"/ContactUs"}
                  className={({ isActive }) =>
                    isActive ? isActiveStyles : isNotActiveStyles
                  }
                >
                  <div>
                    {" "}
                    <IoPeopleOutline className={styles.icon} />
                    <span> Contact Us</span>
                  </div>
                </NavLink>
              </li>
            </ul>
            <div className={styles.navOverlay}></div>
          </div>
        )}
      </div>

      <TitleHeader />

      <div
        onMouseEnter={() => setIsMenu(true)}
        onMouseLeave={() => setIsMenu(false)}
        className="flex items-center ml-auto cursor-pointer gap-2 relative"
      >
        <img
          src={user?.user?.imageURL}
          className="w-12 h-12 min-w-[44px] object-cover rounded-full shadow-lg"
          alt=""
          referrerPolicy="no-referrer"
        />
        <div className="flex flex-col">
          <p className="text-textColor text-lg hover:text-headingColor font-semibold">
            {/* {user?.user?.email} */}
            {/* {createUser?.email} */}
            {createUser?.displayName}
            {/* {user?.user?.name} */}
          </p>
          <p className="flex items-center gap-2 text-xs text-gray-500 font-normal">
            Premium Member .{" "}
            <FaCrown className="text-sm -ml-1 text-yellow-500" />
          </p>
        </div>

        {isMenu && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute z-10 flex flex-col top-12 p-3 right-0 w-275 gap-2 bg-card shadow-lg rounded-lg backdrop-blur-sm"
          >
            <NavLink to={"/Profile"}>
              <p className="text-base hover:font-semibold duration-150 transition-all ease-in-out">
                Profile
              </p>
            </NavLink>

            <NavLink to={"/LikeSongs"}>
              <p className="text-base hover:font-semibold duration-150 transition-all ease-in-out">
                Like Songs
              </p>
            </NavLink>

            <hr />

            {user?.user?.role === "admin" && (
              <>
                <NavLink to={"/dashboard/home"}>
                  <p className="text-base hover:text-red-600 hover:font-semibold duration-150 transition-all ease-in-out">
                    Dashboard
                  </p>
                </NavLink>

                <hr />
              </>
            )}

            <p
              className="text-base hover:font-semibold duration-150 transition-all ease-in-out"
              onClick={logOut}
            >
              Sign Out
            </p>
          </motion.div>
        )}
      </div>
    </header>
  );
};
export default Header;
