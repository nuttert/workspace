import axios  from "axios";


export default {
  getProfileDescriptions: () => axios.get('/descriptions/profile.json'),
}
