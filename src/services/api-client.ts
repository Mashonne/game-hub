import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
      key: "33a847934a084b8c96756b154a9e4c21",
    },
})