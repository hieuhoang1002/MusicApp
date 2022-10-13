import { Link } from "react-router-dom";
import { Logo } from "../assets/img";
import { useUserContext } from "../context/UserContext";

import styles from "../scss/notFound.module.scss";

const NotFound = () => {
  const { error } = useUserContext();

  return (
    <div className={styles.container}>
      <h2 className={styles.h2}> {error && <>{error}</>}</h2>
      <img className={styles.logo} src={Logo} alt="logo" />
      <h1 className={styles.h1}>Music Entertainment</h1>

      <p className={styles.p}>Listen to the music happily!</p>
      <button className={styles.button}>
        <Link to="/Home">Home</Link>
      </button>
      <button className={styles.button2}>
        <Link to="/login">Login</Link>
      </button>
      <br />
      <span className={styles.span}>Help</span>
    </div>
  );
};
export default NotFound;
