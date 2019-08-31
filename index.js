require('dotenv').config()

const axios = require('axios');

const adAccountId = `act_${process.env.AD_ACCOUNT_ID}`;
const accessToken = process.env.ACCESS_TOKEN;
const apiEndpoint = 'https://graph.facebook.com/v4.0';

const api = `${apiEndpoint}/${adAccountId}/insights`;

const params = {
  level: 'campaign',
  fields: 'campaign_name,impressions,spend,inline_link_clicks',
  date_preset: 'last_month'
};

async function getData () {
  const {level, fields, date_preset} = params;
  const res = await axios.get(`${api}?access_token=${accessToken}&level=${level}&fields=${fields}&date_preset=${date_preset}`)
  console.log(JSON.stringify(res.data.data));
}

getData().catch(err => console.log(err));