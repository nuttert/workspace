import React from 'react';
import Grid from "@material-ui/core/Grid";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Avatar from "components/Avatar/Avatar";
import ContactsBox from "components/ContactInfo/ContactsBox";
import Box from "components/Boxes/Box";
import Status from "components/Status/Status";
import Progress from 'components/Progress/Progress';
import SkillsBlocks from 'components/SkillsBlocks/SkillsBlocks';
import { styledFont, whiteColor } from 'assets/user-css/commonStyles';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from "@material-ui/core/styles";

const styles =  theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  name: {
    ...styledFont,
    color: whiteColor,
    padding: 0,
    margin: 0,
    marginTop: "10px",
  }
});



const useStyles = makeStyles(styles);

export default function Profile(props) {
  const classes = useStyles();
  const { avatar, contacts, isReady,fraction } = props;
  const avatarSrc = avatar && avatar['src'];
  const fullName = props.name + " " + props.secondName;
  const [progress, setProgress] = React.useState(0);


  return (
    isReady ?
      <div style={{ marginTop: "5%", position: "relative" }} className={classes.root}>
        <GridContainer
          direction="column" justify="center" alignItems="center" xs={12}>
              <GridItem xs={12} sm={12} md={4}>
                <Box profile style={{ boxShadow: "none" }}>
                  <Avatar profile>
                    <img src={avatarSrc} alt={fullName} />
                  </Avatar>
                  <h2 className={classes.name}>{fullName}</h2>
                  <Status status={props.status} />
                  <ContactsBox contacts={contacts} profile />
                </Box>
              </GridItem>

        </GridContainer>

        <SkillsBlocks fraction={fraction} />
      </div>
      :
      <Progress className={classes.progress} progress={progress} />

  );
}




