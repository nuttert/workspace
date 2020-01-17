import Portfolio from '../components/Portfolio'
import {connect} from 'react-redux';
// import {default as UserActions} from '../redux/actions/profileActions';



export default connect(
  ({profile})=>{
    const {data} = profile;
    if (data === null) return{};
    const {portfolio} = data;
    if (portfolio === null) return{};

    return {
      likes: portfolio.likes,
      views:  portfolio.views,
      portfolio: portfolio
    };
  })(Portfolio);
