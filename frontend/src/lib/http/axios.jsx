import axios from "axios";

export const http = axios.create({
    baseURL:`http://localhost:3000/hcloud/`,
    headers: {'user-token' : localStorage.getItem('user-token')?localStorage.getItem('user-token'):null,
        "productid" : localStorage.getItem("productid")? localStorage.getItem('productid'):null
    }

})

export const path = `http://localhost:3000/`
