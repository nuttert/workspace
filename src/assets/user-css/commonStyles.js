const  aquaColor = "#1dbeea";
const  darkBlue = "#171736";
const  blackColor ="#161c1e";
const  whiteColor = "#ffffff";
const greenColor = "#35FF73";
const darkPerpleColor = "#171840";
const pink = "#e61871";
const greyColor = "#888888";
const greenAquaColor = "#1ff3b6";

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: "300",
  lineHeight: "1.5em"
};

const border = "5px";

const styledFont = {
fontFamily: "acumin-pro,sans-serif",
fontWeight: 400,
fontStyle: "normal"
}

const transition = {
  transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
};

const drawerWidth = 220;


const hexToRgb = input => {
  input = input + "";
  input = input.replace("#", "");
  let hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error("input is not a valid hex color.");
  }
  if (input.length === 3) {
    let first = input[0];
    let second = input[1];
    let last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  let first = input[0] + input[1];
  let second = input[2] + input[3];
  let last = input[4] + input[5];
  return (
    parseInt(first, 16) +
    ", " +
    parseInt(second, 16) +
    ", " +
    parseInt(last, 16)
  );
};

const pointStyle ={
  width:"10px",
  height:"10px",
  borderRadius:"50%",
}

const hrStyle = {
  width: '10%',
  height: 1,
  borderRadius: 3,
  marginLeft: 0,
}

const sm ="600px";
const md ="960px";
const lg ="1280";
const xl ="1920";




export 
{
  aquaColor,
  blackColor,
  darkBlue,
  whiteColor,
  greenColor,
  darkPerpleColor,
  pink,
  greyColor,
  greenAquaColor,

  defaultFont,
  styledFont,
  transition,
  drawerWidth,
  hexToRgb,
  border,

  pointStyle,
  hrStyle
};
