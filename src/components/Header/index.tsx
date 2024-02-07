import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import styles from "@styles";

export default function Header() {
  return (
    <header className={styles.header.container}>
      <Link className={styles.header.homeLink} to="/">
        <img className={styles.header.logo} src="/logo.png" alt="Blooket" />
        <div>Admin</div>
      </Link>
      <div className={styles.header.rightSide}>
        <Link className={styles.header.button} to="/login">
          <FontAwesomeIcon icon={faHome} />
        </Link>
        <Link className={styles.header.button} to="/logout">
          <FontAwesomeIcon icon={faSignOutAlt} />
        </Link>
      </div>
    </header>
  );
}
