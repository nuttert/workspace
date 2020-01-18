import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

import GridItem from "components/Grid/GridItem";
import GridContainer from "components/Grid/GridContainer";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import styles from "assets/user-css/components/contactsBoxStyle";
import { ReactComponent as LocationIcon } from "assets/img/location.svg";
import { ReactComponent as WorksAtIcon } from "assets/img/works-at.svg";
import feedbacks from './feedbacks'



const useStyles = makeStyles(styles);


const locationBlockInfo = {
  location: {
    icon: LocationIcon,
    title: "Location:"
  },
  worksAt: {
    icon: WorksAtIcon,
    title: "Works at:"
  },

};

const feedbacksBlockInfo = {
  feedbacks: {}
}

export default function ContactsBox(props) {
  const classes = useStyles();
  const { className, children, contacts, ...rest } = props;
  const contactsBoxClasses = classNames({
    [classes.box]: true,
  });

  const locationBlock = (value, info) => {
    if (typeof value != 'string') { console.warn(`location value is not string ${value}`); return }
    return (
      <GridContainer
        item
        direction="row"
      >
        <GridContainer item justify="center" alignItems="center">
          <info.icon className={classes.svgImg} alt={info.title} />
          <Typography className={classes.itemText} component="subtitle2" variant="subtitle2" noWrap>
            {info.title}
          </Typography>
        </GridContainer>
        <GridContainer item style={{ padding: 0 }}>
          <Typography className={classes.itemText} component="subtitle2" variant="subtitle2" noWrap>
            {value}
          </Typography>
        </GridContainer>
      </GridContainer>
    )
  };

  const feedbackBlock = (value) => {
    if (typeof value != 'object') { console.warn(`feedbacks value is not array ${value}`); return }
    return (
      value.map(({ name, ref }) => {
        const currentFeedback = feedbacks[name];
        if (!currentFeedback) { console.error(`Can't find feedbacks ${name}`); return }
        return (
          <GridItem xs={2}>
            <a href={ref}><currentFeedback.icon className={classes.svgImgFeedback} alt={name} /></a>
          </GridItem>);
      })
    )
  };


  return (
    <GridContainer sm={12} md={6} className={contactsBoxClasses} {...rest}>
      <GridContainer
        direction="column"
        alignItems="flex-start"
        xs={12}>
        {
          contacts &&
          locationBlockInfo &&
          Object.entries(locationBlockInfo).map(([key, info]) => {
            const value = contacts[key];
            if (!value) return;
            return (
              locationBlock(value, info)
            );
          })
        }
      </GridContainer>

      <GridContainer
        direction="row"
        alignItems="center"
        justify="center"
        spacing={2}
        >
        {
          contacts &&
          feedbacksBlockInfo &&
          Object.entries(feedbacksBlockInfo).map(([key, info]) => {
            const value = contacts[key];
            if (!value) return;
            return (
              feedbackBlock(value)
            );

          })
        }
      </GridContainer>

      <GridContainer
        direction="row"
        alignItems="center"
        justify="center"
        spacing={2}>
        <GridItem xs={6}><Button fullWidth={true} className={classes.messageButton}>Message</Button></GridItem>
        <GridItem xs={6}><Button fullWidth={true} className={classes.phoneButton}>Phone</Button></GridItem>
      </GridContainer>

    </GridContainer>
  );
}

ContactsBox.propTypes = {
  className: PropTypes.string,
  contacts: PropTypes.object.isRequired,
  children: PropTypes.node
};
