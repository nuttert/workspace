import BackgroundImage from 'components/BackgroundImage'
import {connect} from 'react-redux';
import {default as UserActions} from 'redux/actions/profileActions';



export default connect(
  ({profile})=>{
    return {
      image: profile.data && profile.data.backgroundImage
    };
  })(BackgroundImage);
