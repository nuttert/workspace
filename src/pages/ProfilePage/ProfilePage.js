import Profile from 'pages/Profile/ProfilePage'
import {connect} from 'react-redux';
// import {default as UserActions} from '../redux/actions/profileActions';



export default connect(
  ({profile})=>{
    const {data,descriptions,isReady} = profile;
    if (data === null) return{isReady};
    return {
      isReady,
      avatar: data.avatar,
      name: data.name,
      secondName:  data.secondName,
      feedbacks: data.feedbacks,
      contacts: data.contacts,
      workspaceAbilities: data.workspaceAbilities,
      skills: data.skills,
      status: data.status,
      fraction: data.fraction,
      descriptions
    };
  })(Profile);
