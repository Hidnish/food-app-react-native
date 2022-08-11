import axios from 'axios'; 

// Yelp API boilterplate 

export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: "Bearer sKeZ4VGGjPXMQ8b1vUDO_Cb76u_NkLlB7hOx2Wtcju_wD1FQ58LrGcyZS2xXHaa_opwm_RnZrik9uB9fn_GxdNzRjenfA2LoVZmNoNe_ZdoJv5Tc6nBxreOd5CWnYnYx"
    }
})