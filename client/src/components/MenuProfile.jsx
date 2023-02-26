import React from "react";
import styles from "../scss/menuProfile.module.scss";
import { AiOutlineHome, AiOutlineEdit } from "react-icons/ai";
import {
  IoNotificationsOutline,
  IoKeyOutline,
  IoReload,
  IoTimerOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const MenuProfile = () => {
  const icons = [
    <AiOutlineHome />,
    <AiOutlineEdit />,
    <IoNotificationsOutline />,
    <IoKeyOutline />,
    <IoReload />,
    <IoTimerOutline />,
    <IoSettingsOutline />,
  ];

  const texts = [
    "Account overview",
    "Edit profile",
    "Notification settings",
    "Privacy setting",
    "Recover playlist",
    "Receipts",
    "Settings",
  ];
  return (
    <div className={styles.iconsAndtexts}>
      <div className={styles.icons}>
        {icons.map((icon, index) => (
          <p key={index}>{icon}</p>
        ))}
      </div>
      <div className={styles.texts}>
        {texts.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
};

export default MenuProfile;
