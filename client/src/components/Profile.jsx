import React, { useState } from "react";
import styles from "../scss/profile.module.scss";
import { Logo } from "../assets/img";
import { NavLink } from "react-router-dom";
import { ImgProfile } from "../assets/img";
import { useUserContext } from "../context/UserContext";
import { useStateValue } from "../context/StateProvider";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { AiOutlineBars } from "react-icons/ai";
import MenuProfile from "./MenuProfile";

const Profile = () => {
  const { createUser } = useUserContext();
  const [{ user }] = useStateValue();

  const [show, setShow] = useState(false);
  const handleShowMenu = () => {
    setShow(!show);
  };

  const footerIcons = [<InstagramIcon />, <TwitterIcon />, <FacebookIcon />];

  const linkIcons = [
    "https://www.instagram.com/hhieu102/",
    "https://twitter.com/Vagabond102",
    "https://www.fb.com/people/Hoàng-Trung-Hiếu/100009041766341/",
  ];

  const company = ["About", "Jobs", "For the Record"];

  const communities = [
    "For Artists",
    "Developers",
    "Advertising",
    "Investors",
    "Vendors",
  ];

  const usefullinks = ["Support", "Web Player", "Free Mobile App"];

  const rules = [
    "Legal",
    "  Privacy Center",
    "  Privacy Policy",
    "  Cookies",
    "  About Ads",
  ];

  return (
    <div>
      <div className={styles.header}>
        <div className={styles.title}>
          <NavLink to={"/Premium"}>
            <p>Premium</p>
          </NavLink>
          <p>Support</p>
          <p>Download</p>
        </div>
        <div className={styles.logo}>
          <NavLink to={"/Home"}>
            <img src={Logo} alt="" />
          </NavLink>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.content}>
          <p>Music without limits</p>
          <span>
            Premium lets you play any song, anytime. You can even listen when
            you’re offline. <br /> No restrictions. Ad-free music listening.
          </span>
          <NavLink to={"/Premium"}>
            <button>Get Premium</button>
          </NavLink>
          <img src={ImgProfile} alt="" />
        </div>

        <div className={styles.profile}>
          <div className={styles.profileTitle}>
            <div>
              <img src={user?.user?.imageURL} alt="" />
            </div>
            <div>
              <button onClick={handleShowMenu}>
                <AiOutlineBars />
              </button>
              {show && <MenuProfile />}
              {/* {show === true ? <MenuProfile /> : null} */}
            </div>
          </div>

          <div className={styles.profileContent}>
            <h2>Account overview</h2>
            <h4>Profile</h4>

            <table>
              <tr>
                <td>
                  <p>Name</p>
                </td>
                <td> {createUser?.displayName}</td>
              </tr>
              <tr>
                <td>
                  <p>Email</p>
                </td>
                <td>{createUser?.email}</td>
              </tr>
              <tr>
                <td>
                  <p>Date of birth</p>
                </td>
                <td>February 10, 2000</td>
              </tr>
              <tr>
                <td>
                  <p>Country or region</p>
                </td>
                <td>VietNam</td>
              </tr>
            </table>

            <button>Edit profile</button>
          </div>
        </div>
      </div>

      <div className={styles.footers}>
        <div className={styles.footer1}>
          <div className={styles.logoName}>
            <div className={styles.logo}>
              <img alt="" src={Logo} />
            </div>
            <div className={styles.name}>
              <p>Music</p>
              <span>Entertainment</span>
            </div>
          </div>

          <div className={styles.contents}>
            <p>COMPANY</p>
            <div className={styles.content}>
              {company.map((link, index) => (
                <span key={index}>{link}</span>
              ))}
            </div>
          </div>

          <div className={styles.contents}>
            <p>COMMUNITIES</p>
            <div className={styles.content}>
              {communities.map((link, index) => (
                <span key={index}>{link}</span>
              ))}
            </div>
          </div>

          <div className={styles.contents}>
            <p>USEFUL LINKS</p>
            <div className={styles.content}>
              {usefullinks.map((link, index) => (
                <span key={index}>{link}</span>
              ))}
            </div>
          </div>

          <div className={styles.icons}>
            {footerIcons.map((icon, index) => (
              <a href={linkIcons[index]} target="_blank" rel="noreferrer">
                <div className={styles.icon} key={index}>
                  {icon}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footer2}>
          <div className={styles.service}>
            {rules.map((link, index) => (
              <p key={index}>{link}</p>
            ))}
          </div>

          <div className={styles.email}>© HTH1821050842@music.com.vn</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
