import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';




export default function Progress({progress, className}) {
  return (
    <CircularProgress className={className} variant="determinate" value={progress} color="black" />
    );
};
