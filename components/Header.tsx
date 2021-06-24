import React, { FC } from "react";
import styles from "../styles/Layout.module.css";

type HeaderProps = {
  isMain: boolean;
};

const Header: FC<HeaderProps> = ({ isMain }) => {
  return (
    <div className={styles.header}>
      <a href="#default" className={styles.logo}>
        CompanyLogo
      </a>
      <div className={styles.headerRight}>
        {isMain && (
          <a className={styles.active} href="/secondary-page">
            Go to secondary
          </a>
        )}
      </div>
    </div>
  );
};

export default Header;
