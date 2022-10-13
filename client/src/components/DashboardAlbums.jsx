import React, { useEffect } from "react";
import { IoAdd } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { getAllAlbums } from "../api";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import SongCard from "./SongCard";

const DashboardAlbums = () => {
  const [{ allAlbums }, dispath] = useStateValue();

  useEffect(() => {
    if (!allAlbums) {
      getAllAlbums().then((data) => {
        dispath({
          type: actionType.SET_ALL_ALBUMS,
          allAlbums: data.album,
        });
      });
    }
  }, []);
  return (
    <div className="w-full p-4 flex items-center justify-center flex-col">
      <NavLink
        to={"/dashboard/newAlbum"}
        className="flex items-center justify-center px-4 py-3 border rounded-md border-gray-300 hover:border-gray-500 hover:shadow-md cursor-pointer"
      >
        <IoAdd />
      </NavLink>
      <div className="relative w-full my-4 p-4 py-16 border border-gray-300 rounded-md">
        <div className="absolute top-4 left-4">
          <p className="text-xl font-bold">
            <span className="text-sm font-semibold text-textColor">
              Albums:{" "}
            </span>
            {allAlbums?.length}
          </p>
        </div>
        <AlbumContainer data={allAlbums} />
      </div>
    </div>
  );
};

export const AlbumContainer = ({ data }) => {
  return (
    <div className="w-full flex flex-wrap gap-3 items-center justify-evenly">
      {data &&
        data.map((song, i) => (
          <SongCard key={song._id} data={song} index={i} type="album" />
        ))}
    </div>
  );
};

export default DashboardAlbums;
