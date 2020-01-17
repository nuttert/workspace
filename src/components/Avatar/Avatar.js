import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/user-css/components/avatarStyle";
const useStyles = makeStyles(styles);

export default function Avatar(props) {
  const classes = useStyles();
  const { children, className, chat, profile, ...rest } = props;
  const avatarClasses = classNames({
    [classes.avatar]: true,
    [classes.avatarProfile]: profile,
    [classes.avatarChat]: chat,
    [className]: className !== undefined
  });
  return (
    <div className={avatarClasses} {...rest}>
      {children}
    </div>
  );
}

Avatar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  profile: PropTypes.bool,
  chat: PropTypes.bool
};
