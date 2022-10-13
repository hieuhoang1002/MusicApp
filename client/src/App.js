import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { firebaseAuth } from "./config/firebase";

import { AnimatePresence, motion } from "framer-motion";
import { validateUser } from "./api";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";
import {
  ContactUs,
  Dashboard,
  MusicPlayer,
  Musics,
  Premium,
} from "./components";
import NotFound from "./components/NotFound";

function App() {
  const navigate = useNavigate();

  const [{ user, isSongPlaying }, dispatch] = useStateValue();

  const [auth, setAuth] = useState(
    false || window.localStorage.getItem("auth") === "true"
  );

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((userCred) => {
      if (userCred) {
        userCred.getIdToken().then((token) => {
          // console.log(token);
          validateUser(token).then((data) => {
            // console.log(data);
            dispatch({
              type: actionType.SET_USER,
              user: data,
            });
          });
        });
      } else {
        setAuth(false);
        window.localStorage.setItem("auth", "false");
        dispatch({
          type: actionType.SET_USER,
          user: null,
        });
        navigate("/login");
      }
    });
  }, []);
  return (
    <div>
      {/* ============================= */}
      <div className="bg-red-600">
        {/* {error && <p>{error}</p>} */}
        {/* {loading ? <h2>Loading...</h2> : <>{users ? <Home /> : <Auth />}</>} */}
      </div>
      {/* ------------------------------ */}
      <AnimatePresence exitBeforeEnter>
        <div
        // className="h-auto min-w-[680px] bg-primary flex justify-center "
        >
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/Musics" element={<Musics />} />
            <Route path="/Premium" element={<Premium />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login setAuth={setAuth} />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>

          {isSongPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed min-w-[700px] h-26 inset-x-0 bottom-0 bg-cardOverlay drop-shadow-2xl backdrop-blur-md flex items-center justify-center"
            >
              <MusicPlayer />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
