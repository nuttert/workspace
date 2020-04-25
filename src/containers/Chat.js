import Chat from 'components/Chat/Chat'
import {connect} from 'react-redux';
import {default as UserActions} from 'redux/actions/profileActions';



export default connect(
  ({user})=>{
    return {
      image: user.data && user.data.backgroundImage
    };
  })(Chat);
