import axios from "axios";

export default axios.create({
 baseURL: 'https://api.rawg.io/api',
 params: {
  key: '3fffad8781ad46469a828f6a0474624e'
 }
})