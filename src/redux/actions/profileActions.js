import React from 'react';
import {UPDATE_BACKGROUND_IMAGE,SET_USER_DATA,SET_PROFILE_DESCRIPTIONSCRIPTIONS} from './actionsTypes';
import {default as userApi} from 'utils/api/user';
import {default as descriptionsApi} from 'utils/api/descriptions';

const Actions = {
  updateBackgroundImage: image =>{
    return {
      type:UPDATE_BACKGROUND_IMAGE,
      payload:image
    }
  },
  setUserData: data =>{
    return {
      type:SET_USER_DATA,
      payload:data
    }
  },
  setProfileDescriptions: data =>{
    return {
      type:SET_PROFILE_DESCRIPTIONSCRIPTIONS,
      payload:data
    }
  },

  fetchUserData: () => dispatch =>{
    userApi.getUserData().
    then(({data}) =>{
      dispatch(Actions.setUserData(data));
    }).
    catch(error=>{
      console.log("auth error", error);
    })
  },
  fetchProfileDescriptions: () => dispatch =>{
    descriptionsApi.getProfileDescriptions().
    then(({data}) =>{
      dispatch(Actions.setProfileDescriptions(data));
    }).
    catch(error=>{
      console.log(error);
    })
  },
} 

export default Actions;
