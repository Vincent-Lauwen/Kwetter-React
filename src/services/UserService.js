import axios from "axios";

const apiUrl = `http://20.126.251.223:80/api/User/ca7c1304-dbe1-4413-920b-1d0952337986`;
const instance = axios.create({
  baseURL: apiUrl,
});

class UserService {
  getUserTest = async () => {
    const {data} = await axios.get(apiUrl)
    console.log(data);
    return data;
  }

  
}

export default new UserService();