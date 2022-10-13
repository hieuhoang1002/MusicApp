import React, { useEffect } from "react";
import { getAllSongs } from "../api";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import Header from "./Header";
import { motion } from "framer-motion";
import styles from "../scss/musics.module.scss";

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
    text: "Broken Heart",
    img: "https://mosaic.scdn.co/640/ab67616d00001e02005799610338a5b57d865926ab67616d00001e0215a67578922d65121b12073dab67616d00001e0248f4704427189fe1957d2871ab67616d00001e02e099e697d0068b652fe6814e",
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
  {
    text: "Trending Top Hot Hit",
    img: "https://mosaic.scdn.co/640/ab67616d00001e020dfdbae46bfeb56697ca35acab67616d00001e021fd0a8fc28b2a0a5d9cdc6c6ab67616d00001e0241e31d6ea1d493dd77933ee5ab67616d00001e0282c1b5cc2b62cae85ef7ffdb",
  },
];

const Musics = () => {
  const [{ allSongs }, dispath] = useStateValue();

  useEffect(() => {
    if (!allSongs) {
      getAllSongs().then((data) => {
        console.log(data.songs);
        dispath({
          type: actionType.SET_ALL_SONGS,
          allSongs: data.songs,
        });
      });
    }
  }, []);
  return (
    <div className={styles.containers}>
      <div className={styles.header}>
        <Header />
      </div>

      <div className={styles.header_buttons}>
        {dataTitle.map((map, index) => {
          return (
            <div key={index} className={styles.header_img}>
              <img src={map.img} alt="" />
              <p>{map.text}</p>
            </div>
          );
        })}
      </div>

      <div className={styles.headerSongs}>
        <span className={styles.idSong}>#</span>
        <span className={styles.nameSong}>Name</span>
        <span className={styles.artist}>Artist</span>
        <span className={styles.album}>Album</span>
      </div>
      {/* <hr /> */}
      <SongContainer data={allSongs} />

      {/* //======================= */}
      <hr />
      <div className={styles.khoangtrang}></div>
    </div>
  );
};

export const SongContainer = ({ data }) => {
  return (
    <div className="">
      {data &&
        data.map((song, i) => (
          <SongCardMusic key={song._id} data={song} index={i} type="song" />
        ))}
    </div>
  );
};
export const SongCardMusic = ({ data, index, type }) => {
  const [{ isSongPlaying, songIndex }, dispath] = useStateValue();

  const addToContext = () => {
    if (!isSongPlaying) {
      dispath({
        type: actionType.SET_ISSONG_PLAYING,
        isSongPlaying: true,
      });
    }

    if (songIndex !== index) {
      dispath({
        type: actionType.SET_SONG_INDEX,
        songIndex: index,
      });
    }
  };

  return (
    <div
      className={styles.containersSong}
      onClick={type === "song" && addToContext}
    >
      <div className={styles.idSongCar}>
        <p>{index + 1}</p>
      </div>

      <div className={styles.nameSongCar}>
        <motion.img
          src={data.imageURL}
          whileHover={{ scale: 1.5 }}
          className={styles.imgSongCar}
        />
        <p>
          {data.name.length > 25 ? `${data.name.slice(0, 25)}..` : data.name}
        </p>
      </div>

      <div className={styles.artistSong}>
        {data.artist && (
          <p>
            {data.artist.length > 25
              ? `${data.artist.slice(0, 25)}....`
              : data.artist}
          </p>
        )}
      </div>

      <div className={styles.albumSong}>
        <p>{data.album}</p>
      </div>
    </div>
  );
};
export const mapStateToProps = (state) => {
  return {
    selectedSongId: state.selectedSongId,
    playerState: state.playerState,
  };
};

export default Musics;
