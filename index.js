require('dotenv').config()

const axios = require('axios');

const adAccountId = `act_${process.env.AD_ACCOUNT_ID}`;
const accessToken = process.env.ACCESS_TOKEN;
const apiEndpoint = 'https://graph.facebook.com/v3.3';

const api = `${apiEndpoint}/${adAccountId}/insights`

// axios.get(`${api}?access_token=${accessToken}&fields=impressions&date_preset=last_month`)
//   .then(response => {
//     console.log(JSON.stringify(response.data.data[0]));
//   }).catch(error => {
//     console.log(error);
//   })

async function getData () {
  const res = await axios.get(`${api}?access_token=${accessToken}&fields=impressions&date_preset=last_month`)
  console.log(JSON.stringify(res.data.data[0]));
}

getData();