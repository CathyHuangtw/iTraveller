import React from 'react';
import styles from '../styles/footerStyle';
import injectSheet from 'react-jss';

const Footer = ({classes}) => (
  <div className={classes.fullrow}>
    <div className={classes.actionrow}>
      <div className="col-xs-12 col-md-12">
        <p className={classes.p}>CODED BY CATHY HUANG. 2018.
        </p>
      </div>
    </div>
  </div>
);

export default injectSheet(styles)(Footer);