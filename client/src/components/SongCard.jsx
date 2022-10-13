import React from "react";
import { motion } from "framer-motion";
import { IoTrash } from "react-icons/io5";
import { useState } from "react";
import {
  deleteAlbumById,
  deleteArtistById,
  deleteSongById,
  getAllAlbums,
  getAllArtists,
  getAllSongs,
} from "../api";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { storage } from "../config/firebase";
import { deleteObject, ref } from "firebase/storage";

const SongCard = ({ data, index, type }) => {
  const [isDelete, setIsDelete] = useState(false);
  const [
    { alertType, allArtists, allAlbums, allSongs, isSongPlaying, songIndex },
    dispath,
  ] = useStateValue();

  const deleteData = (data) => {
    const deleteRef = ref(storage, data.imageURL);
    deleteObject(deleteRef).then(() => {});

    // Delete Song
    deleteSongById(data._id).then((res) => {
      if (res.data) {
        getAllSongs().then((data) => {
          console.log(data.songs);
          dispath({
            type: actionType.SET_ALL_SONGS,
            allSongs: data.songs,
          });
        });
      }
    });

    // Delete Artist
    deleteArtistById(data._id).then((res) => {
      if (res.data) {
        getAllArtists().then((data) => {
          dispath({
            type: actionType.SET_ALL_ARTISTS,
            allArtists: data.artist,
          });
        });
      }
    });

    // Delete Album
    deleteAlbumById(data._id).then((res) => {
      if (res.data) {
        getAllAlbums().then((data) => {
          dispath({
            type: actionType.SET_ALL_ALBUMS,
            allAlbums: data.album,
          });
        });
      } else {
      }
    });
  };

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
    <motion.div
      onClick={type === "song" && addToContext}
      className="relative w-40 min-w-210 px-2 py-4 cursor-pointer hover:bg-card bg-gray-100 shadow-md rounded-lg flex flex-col items-center"
    >
      <div className="w-40 min-w-[160px] h-40 min-h-[160px] rounded-lg drop-shadow-lg relative overflow-hidden">
        {/* <p>{index + 1}</p> */}
        <motion.img
          src={data.imageURL}
          whileHover={{ scale: 1.05 }}
          className="w-full h-full rounded-lg object-cover"
        />
      </div>

      <p className="text-base text-headingColor font-semibold my-2 flex flex-col items-center">
        {data.name.length > 15 ? `${data.name.slice(0, 15)}...` : data.name}
      </p>

      <div className="w-full absolute bottom-2 right-2 flex items-center justify-between px-4">
        <motion.i
          whileTap={{ scale: 0.75 }}
          className="text-base text-red-400 drop-shadow-md hover:text-red-600"
          onClick={() => setIsDelete(true)}
        >
          <IoTrash />
        </motion.i>
      </div>

      {isDelete && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="gap-0 px-4 py-2 absolute inset-0 backdrop-blur-md bg-cardOverlay flex items-center flex-col justify-center"
        >
          <p className="text-lg text-headingColor font-semibold text-center">
            Are you sure do you want to delete it?
          </p>
          <div className="flex items-center gap-4">
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={deleteData(data)}
              className="px-2 py-1 text-sm uppercase bg-red-300 rounded-md hover:bg-red-500 cursor-pointer"
            >
              YES
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.7 }}
              onClick={() => setIsDelete(false)}
              className="px-2 py-1 text-sm uppercase bg-yellow-300 rounded-md hover:bg-yellow-500 cursor-pointer"
            >
              NO
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default SongCard;
