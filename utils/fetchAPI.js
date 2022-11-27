const axios = require('axios');
export const baseUrl = "https://bayut.p.rapidapi.com"


// 'X-RapidAPI-Key': '0a3a48247cmshd7bac0cb8cf85f6p16333bjsn67b087417fed',
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com'

export const fetchApi = async(url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '0a3a48247cmshd7bac0cb8cf85f6p16333bjsn67b087417fed',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })
    return data;
}