import axios from "axios";
import { Tweet } from "../models/Tweet";

const apiUrl = "http://localhost:5107/api";
const instance = axios.create({
  baseURL: apiUrl,
});

class TweetService {
  getTweets() {
    return () => instance.get(`Tweet/tweets`)
      .then(response => {
        console.log(response.data);
        return response.data;
      })
  }

  postTweet(tweetRequestBody) {
    console.log("tweet: ", tweetRequestBody);
    return () => instance.post(`tweet`, tweetRequestBody)
      .then(response => {
        console.log(response.data);
        return response.data;
      });
  }
}

export default new TweetService();