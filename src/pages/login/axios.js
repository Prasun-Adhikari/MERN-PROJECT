import axios from "axios";
import { resolveBaseUrl } from "vite";

const apiUrl = "https://localhost:3000";  

// get request.
axios.get(`${apiUrl}/submit`)
.then(response =>{
    console.log(response.data);
})
.catch(error=>{
    console.error(error);
});