import axios from "axios"

const coc =  axios.create({
    baseURL: process.env.COC_API_URL,
    headers: {
        common: {
            'Authorization': `Bearer ${process.env.COC_API_KEY}`
        }
    }
});

export default coc;