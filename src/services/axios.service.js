import axios from "axios";

import {baseURL} from "../config";

export const axiosService = axios.create({
    baseURL,
    params: {
        api_key : "eb2e39332cda3204a007e7f43f8a5a78"
    },
});