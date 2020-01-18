import { hexToRgb, blackColor } from 'assets/user-css/commonStyles';

const AvatarStyle = {
  avatar: {
    "& img": {
      width: "100%",
      height: "auto",
      position:"relative",
    },
  },
  avatarProfile: {
    maxWidth: "130px",
    maxHeight: "130px",
    margin: "0 auto 0",
    borderRadius: "50% !important",
    WebkitBorderRadius: '50%',
    MozBorderRadius: '50%',
    WebkitAppearance: 'none',
    clipPath: 'circle(50% at center)',
    WebkitMaskImage: '-webkit-radial-gradient(white, black)',
    overflow: "hidden",
    background:"black",
    padding: "0",
    position:"relative",
    boxShadow:
      "0 16px 38px -12px rgba(" +
      hexToRgb(blackColor) +
      ", 0.56), 0 4px 25px 0px rgba(" +
      hexToRgb(blackColor) +
      ", 0.12), 0 8px 10px -5px rgba(" +
      hexToRgb(blackColor) +
      ", 0.2)",
    "&$cardAvatarPlain": {
      marginTop: "0"
    }
  },
  avatarChat: {}
};

export default AvatarStyle;
