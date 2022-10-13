import React, { useState } from "react";
import Header from "./Header";
import styles from "../scss/home.module.scss";
import JSONDATA from "../MOCK_DATA.json";
import { FiSearch } from "react-icons/fi";
import Slider from "./Slide";
import Footer from "./Footer";

const dataTitle = [
  {
    text: "Made For You",
    img: "https://mosaic.scdn.co/640/ab67616d00001e02005799610338a5b57d865926ab67616d00001e0215a67578922d65121b12073dab67616d00001e0248f4704427189fe1957d2871ab67616d00001e02e099e697d0068b652fe6814e",
  },
  {
    text: "Trending",
    img: "https://mosaic.scdn.co/640/ab67616d00001e020dfdbae46bfeb56697ca35acab67616d00001e021fd0a8fc28b2a0a5d9cdc6c6ab67616d00001e0241e31d6ea1d493dd77933ee5ab67616d00001e0282c1b5cc2b62cae85ef7ffdb",
  },

  {
    text: "Moody mix",
    img: "https://mosaic.scdn.co/640/ab67616d00001e02141cf717cd3993690358a60cab67616d00001e028a3f0a3ca7929dea23cd274cab67656300005f1f1ca1ad292ccefdb9b8e03b8eab67656300005f1f55d0dd0d4adcd780add4ff34",
  },
  {
    text: "Rainy Day Jazz",
    img: "https://mosaic.scdn.co/640/ab67616d0000b2731fd0a8fc28b2a0a5d9cdc6c6ab67616d0000b273829305487c8f3b96a1d955b3ab67616d0000b2738fbcf6544ff02a8959a81781ab67616d0000b273f7da7c0f322b7a1c95190d92",
  },
  {
    text: "Your Time Capsule",
    img: "https://mosaic.scdn.co/640/ab67616d0000b2731229aa0c03472971c35f93caab67616d0000b273862ec173cc4fb26292c7befbab67616d0000b273afb5e5bc125efd4405cc3061ab67616d0000b273f529cf1a5cd5ef2671f1781b",
  },
  {
    text: "Love Myself",
    img: "https://mosaic.scdn.co/640/ab67616d0000b2732a0bd76d87295a3aa292b206ab67616d0000b2736f7355de609524cb46c0ab47ab67616d0000b273ab0fb0f89f2b5d655b10abf1ab67616d0000b273d0e55832fecad252dd29ed9d",
  },
];

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="">
      <div className={styles.header}>
        <Header />
      </div>

      {/* //================== */}
      <div className={styles.containers}>
        <div className={styles.search_bar}>
          <FiSearch className={styles.icon1} />
          <input
            type="search"
            placeholder="Artists, songs, or podcasts"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>

        <div className={styles.body}>
          <div className={styles.header_container}>
            <div className={styles.header_left}>
              <Slider />
            </div>

            <div className={styles.header_right}>
              {dataTitle.map((map, index) => {
                return (
                  <div key={index} className={styles.header_img}>
                    <img src={map.img} alt="" />
                    <p>{map.text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.footer}>
            <div className={styles.text_footer}>
              <h2>Browse all</h2>
            </div>
            <div className={styles.playlist_footer}>
              {JSONDATA.filter((val) => {
                if (searchTerm === "") {
                  return val;
                } else if (
                  val.title
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                } else if (
                  val.description
                    .toLocaleLowerCase()
                    .includes(searchTerm.toLocaleLowerCase())
                ) {
                  return val;
                }
              }).map((val, key) => {
                return (
                  <div key={key} className={styles.background_playlist}>
                    <img src={val.image} alt="" />
                    <p>{val.title}</p>
                    <span>{val.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
