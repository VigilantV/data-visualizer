import { Fragment } from "react";

import dateRange from "../data information/dateRange";

import styles from "./header.module.css";

const Header = () => {
  return (
    <Fragment>
      <div className={styles.top_line}>
        <p className={styles.first_p}>BTC Sentiment</p>
        <p className={styles.second_p}>
          {dateRange[0].day} {dateRange[0].month}, {dateRange[0].year} -
          {dateRange[1].day} {dateRange[1].month}, {dateRange[1].year}
        </p>
      </div>
      <div className={styles.bottom_line}>
        <p>Generated by</p>
        <a className={styles.link} href="">
          QuantStats
        </a>
        <p>(v. 0.0.50)</p>
      </div>
      <div className={styles.seperator}></div>
    </Fragment>
  );
};

export default Header;
