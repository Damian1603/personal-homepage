import axios from "axios";
import { githubAPIURL } from "./githubAPI";

export const getRepositories = username =>
    axios.get(`${githubAPIURL}/users/${username}/repos`)
        .then(response => response.data);