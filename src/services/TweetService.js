import axios from "axios";
import { Tweet } from "../models/Tweet";

const apiUrl = `https://localhost:8084/api/Tweet`;
const instance = axios.create({
  baseURL: apiUrl,
});

class TweetService {
  getTimeLineTweets = async () => {
    const {data} = await axios.get(apiUrl)
    console.log(data);
    return data;
  }

  postTweet(tweetRequestBody) {
    return () => axios.post(apiUrl, tweetRequestBody)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  }
}

export default new TweetService();