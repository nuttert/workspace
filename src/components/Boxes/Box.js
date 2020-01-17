import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/user-css/components/boxStyle";

const useStyles = makeStyles(styles);

export default function Box(props) {
  const classes = useStyles();
  const { className, children, profile, ...rest } = props;
  const boxClasses = classNames({
    [classes.box]: true,
    [classes.boxProfile]: profile,
    [className]: className !== undefined
  });
  return (
    <div className={boxClasses} {...rest}>
      {children}
    </div>
  );
}

Box.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  profile: PropTypes.bool,
  chart: PropTypes.bool,
  children: PropTypes.node
};
