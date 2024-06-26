import React from "react";
import PropTypes from "prop-types";
import styles from "./Header.module.css";
import logo from "../../assets/api.png";

function Header({ userId, score, selectedAvatar }) {
  return (
    <div className={styles.header}>
      <img src={logo} alt="logo of application" className={styles.logoApp}/>
      <div className={styles.userAndScore}>
        <p className={styles.theUser}>{userId}</p>
        {selectedAvatar !== null && (
          <img
            className={styles.avatar}
            src={selectedAvatar}
            alt="Avatar sélectionné"
          />
        )}
        <p className={styles.theScore}>Score: {score}</p>
      </div>
    </div>
  );
}

Header.defaultProps = {
  userId: "",
};

Header.propTypes = {
  userId: PropTypes.string,
  score: PropTypes.number.isRequired,
  selectedAvatar: PropTypes.string.isRequired,
};

export default Header;
