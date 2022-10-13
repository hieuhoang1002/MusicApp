import React, { useState } from "react";
import { AppStore, Background, GooglePlay } from "../assets/img";
import styles from "../scss/contactus.module.scss";
import Header from "./Header";
import {
  BsArrowRight,
  BsCloudArrowDownFill,
  BsFillPlayFill,
  BsInstagram,
  BsTelephoneForwardFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoIosMailOpen } from "react-icons/io";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

const footerIcons = [<FaFacebookF />, <FaTwitter />, <BsInstagram />];

const ContactUs = () => {
  const linkIcons = [
    "https://www.fb.com/people/Hoàng-Trung-Hiếu/100009041766341/",
    "https://twitter.com/Vagabond102",
    "https://www.instagram.com/hhieu102/",
  ];

  const [phoneStyle, setPhoneStyle] = useState({ display: "none" });

  const [emailStyle, setEmailStyle] = useState({ display: "none" });

  return (
    <div className={styles.container}>
      <>
        <Header />
      </>
      <div className={styles.header}>
        <img className={styles.img1} alt="" src={Background} />
      </div>

      <div className={styles.shape}></div>

      <div className={styles.shapes}>
        <div className={styles.shape1}>
          <div className={styles.test2}></div>
          <div className={styles.test3}></div>
        </div>

        <div className={styles.shape1}>
          <div className={styles.test2}></div>
          <div className={styles.test3}></div>
        </div>

        <div className={styles.shape1}>
          <div className={styles.test2}></div>
          <div className={styles.test3}></div>
        </div>

        <div className={styles.shape1}>
          <div className={styles.test2}></div>
          <div className={styles.test3}></div>
        </div>
      </div>

      <div className={styles.contentHeader}>
        <div className={styles.title}>
          <p>MUSIC</p>
          <span>
            Expresses that which can not be said and on which it is impossible
            to be silent
          </span>
          <div className={styles.playMusic}>
            <Link to="/Musics">
              <div className={styles.icon1}>
                <BsFillPlayFill />
              </div>
            </Link>

            <h4>Play the Music</h4>
          </div>

          <a href="#footer">
            <button>
              <div className={styles.textIcon}>
                <p className={styles.text}>Contact Us</p>
                <div className={styles.icon2}>
                  <BsArrowRight />
                </div>
              </div>
            </button>
          </a>
        </div>

        <div className={styles.modal}>
          <div className={styles.iconDownload}>
            <BsCloudArrowDownFill />
          </div>

          <p className={styles.iconTextTitle}>DOWNLOAD APP</p>
          <span className={styles.iconTextContent}>Download Our App</span>

          <div className={styles.appDownload}>
            <div className={styles.googlePlay}>
              <img alt="" src={GooglePlay} />
              <p className={styles.appText}>Google Play</p>
            </div>
            <div className={styles.appStore}>
              <img src={AppStore} alt="" />
              <p className={styles.appText}>App Store</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.body}>
        <p>CATEGORY</p>
        <span>All The Category Provided By Us</span>
        <div className={styles.hr}></div>

        <div className={styles.buttonBody}>
          <div>
            <button className={styles.button}>K-POP</button>
            <button className={styles.button}>V-POP</button>
            <button className={styles.button}>SOUNDTRACK</button>
          </div>

          <div>
            <button className={styles.button}>US-UK</button>
            <button className={styles.button}>LOFI</button>
            <button className={styles.button}>EDM</button>
          </div>
        </div>
      </div>

      <div id="footer" className={styles.footer}>
        {/* <img className={styles.img2} alt="" src={Background2} /> */}
        <div className={styles.lopphu}></div>

        <div className={styles.title}>
          <div className={styles.icons}>
            {footerIcons.map((icon, index) => (
              <a
                className={styles.icon}
                key={index}
                href={linkIcons[index]}
                target="_blank"
                rel="noreferrer"
              >
                {icon}
              </a>
            ))}
          </div>

          <div className={styles.contacts}>
            <div className={styles.contact}>
              <div
                className={styles.detail}
                onMouseEnter={(e) => {
                  setPhoneStyle({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setPhoneStyle({ display: "none" });
                }}
              >
                <BsTelephoneForwardFill className={styles.iconPhone} />
              </div>
              <p style={phoneStyle}>0342027455</p>
            </div>

            <div className={styles.contact}>
              <div
                className={styles.detail}
                onMouseEnter={(e) => {
                  setEmailStyle({ display: "block" });
                }}
                onMouseLeave={(e) => {
                  setEmailStyle({ display: "none" });
                }}
              >
                <IoIosMailOpen />
              </div>
              <p style={emailStyle}>hieuhoang102nqa@gmail.com</p>
            </div>
          </div>
        </div>

        <div className={styles.content}>SAY HELLO!</div>

        <div className={styles.form}>
          <div className={styles.address}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>

          <div className={styles.message}>
            <textarea placeholder="Your Message"></textarea>
          </div>

          <button>
            <div className={styles.textIcon}>
              <p className={styles.text}>Contact Us</p>
              <div className={styles.icon2}>
                <BsArrowRight />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
