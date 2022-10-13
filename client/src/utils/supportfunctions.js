// import { ref } from "firebase/storage";
// import {
//   deleteAlbumById,
//   deleteArtistById,
//   deleteSongById,
//   getAllAlbums,
//   getAllArtists,
//   getAllSongs,
// } from "../api";
// import { storage } from "../config/firebase";
// import { actionType } from "../context/reducer";
// import { useStateValue } from "../context/StateProvider";

// const [{ alertType, allArtists, allAlbums, allSongs }, dispath] =
//   useStateValue();

export const filters = [
  { id: 2, name: "LoFi", value: "LoFi" },
  { id: 3, name: "Rock", value: "Rock" },
  { id: 4, name: "Melody", value: "Melody" },
  { id: 5, name: "Remix", value: "Remix" },
];

export const filterByLanguage = [
  { id: 1, name: "V-POP", value: "v-pop" },
  { id: 2, name: "K-POP", value: "k-pop" },
  { id: 3, name: "USUK", value: "usuk" },
  { id: 4, name: "HoaNgu", value: "hoangu" },
  { id: 5, name: "Remix", value: "remix" },
  { id: 6, name: "NhatBan", value: "remix" },
];

// const deleteObject = (data) => {
//   // console.log(type);
//   // Delete Song
//   // if (type === "song") {
//   const deleteRef = ref(storage, data.imageURL);
//   deleteObject(deleteRef).then(() => {});
//   deleteSongById(data._id).then((res) => {
//     if (res.data) {
//       // dispath({
//       //   type: actionType.SET_ALERT_TYPE,
//       //   alertType: "success",
//       // });
//       // setInterval(() => {
//       //   dispath({
//       //     type: actionType.SET_ALERT_TYPE,
//       //     alertType: null,
//       //   });
//       // }, 3000);
//       getAllSongs().then((data) => {
//         console.log(data.songs);
//         dispath({
//           type: actionType.SET_ALL_SONGS,
//           allSongs: data.songs,
//         });
//       });
//     }
//     // else {
//     //   dispath({
//     //     type: actionType.SET_ALERT_TYPE,
//     //     alertType: "danger",
//     //   });
//     //   setInterval(() => {
//     //     dispath({
//     //       type: actionType.SET_ALERT_TYPE,
//     //       alertType: null,
//     //     });
//     //   }, 3000);
//     // }
//   });
//   // }

//   //  Delete Artist
//   // if (type === "artist") {
//   // const deleteRef = ref(storage, data.imageURL);
//   // deleteObject(deleteRef).then((res) => {});
//   deleteArtistById(data._id).then((res) => {
//     if (res.data) {
//       // dispath({
//       //   type: actionType.SET_ALERT_TYPE,
//       //   alertType: "success",
//       // });
//       // setInterval(() => {
//       //   dispath({
//       //     type: actionType.SET_ALERT_TYPE,
//       //     alertType: null,
//       //   });
//       // }, 3000);
//       getAllArtists().then((data) => {
//         dispath({
//           type: actionType.SET_ALL_ARTISTS,
//           allArtists: data.artist,
//         });
//       });
//     }
//     // else {
//     //   dispath({
//     //     type: actionType.SET_ALERT_TYPE,
//     //     alertType: "danger",
//     //   });
//     //   setInterval(() => {
//     //     dispath({
//     //       type: actionType.SET_ALERT_TYPE,
//     //       alertType: null,
//     //     });
//     //   }, 3000);
//     // }
//   });
//   // }

//   // Delete Album
//   deleteAlbumById(data._id).then((res) => {
//     if (res.data) {
//       // dispath({
//       //   type: actionType.SET_ALERT_TYPE,
//       //   alertType: "success",
//       // });
//       // setInterval(() => {
//       //   dispath({
//       //     type: actionType.SET_ALERT_TYPE,
//       //     alertType: null,
//       //   });
//       // }, 3000);

//       getAllAlbums().then((data) => {
//         dispath({
//           type: actionType.SET_ALL_ALBUMS,
//           allAlbums: data.album,
//         });
//       });
//     } else {
//       // dispath({
//       //   type: actionType.SET_ALERT_TYPE,
//       //   alertType: "danger",
//       // });
//       // setInterval(() => {
//       //   dispath({
//       //     type: actionType.SET_ALERT_TYPE,
//       //     alertType: null,
//       //   });
//       // }, 3000);
//     }
//   });
// };
