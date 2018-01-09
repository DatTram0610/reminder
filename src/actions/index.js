import axios from "axios";

export const POST_NOTE = "post_note";

const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=dtram1234";

export function postNote(values) {
    const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);

    return {
        type: POST_NOTE,
        payload: request
    }
};