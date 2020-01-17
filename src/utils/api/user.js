import axios  from "axios";


export default {
  getUserData: () => axios.get('/data/user1/data.json'),
}
