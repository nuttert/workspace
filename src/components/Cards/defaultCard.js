import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import styles from "assets/user-css/components/defaultCardStyle";

const useStyles = makeStyles(styles);

export default function DefaultCard(props) {
  const classes = useStyles();
  const {image, title, subtitle} = props;
  return (
    <Card className={classes.card}>
    <image className={classes.media + " "+classes.cover}/>
        <CardMedia
        className={classes.cover}
        component={image}
        className={classes.media}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title} component="h5" variant="h5">
            {title}
          </Typography>
          <Typography className={classes.subtitle} variant="subtitle2" noWrap>
           {subtitle}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};
