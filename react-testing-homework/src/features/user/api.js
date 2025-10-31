import axios from "axios";

export function getUser(signal) {
    return axios.get("https://jsonplaceholder.typicode.com/users/1", { signal });
}
