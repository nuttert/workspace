import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/user-css/components/avatarStyle";
import AvatarWrapper from './Avatar'
import { generateAvatarFromHash } from "utils/helpers";

import "./Avatar.scss";
const useStyles = makeStyles(styles);
const Avatar = ({ user }) => {
  const avatar = user.avatar && user.avatar['src']

  if (avatar) {
    return (
      <AvatarWrapper chat> 
      <img
        className='avatar'
        src={avatar}
        alt={`Avatar ${user.fullname}`}
      />
      </AvatarWrapper>
    );
  } else {
    const { color, colorLighten } = generateAvatarFromHash(user._id);
    const firstChar = user.fullname[0].toUpperCase();
    return (
      <div
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${colorLighten} 96.52%)`
        }}
        className="avatar avatar--symbol"
      >
        {firstChar}
      </div>
    );
  }
};

Avatar.propTypes = {
  className: PropTypes.string
};

export default Avatar;
