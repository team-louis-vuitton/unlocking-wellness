import Cors from 'cors'
import initMiddleware from '../../../helpers/init-middleware'
// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  })
)

export default async function handler(req, res) {
  await cors(req, res) // NEED THIS FOR CORS

  //IF YOU NEED TO GET INFO FROM REQ QUERY URL
  // const { category } = req.query;
  const { searchObj } = req.body;
  console.log(searchObj)
  let options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(searchObj),
  };
  const data = await fetch('http://localhost:3001/yelp', options);
  const results = await data.text();
  res.send(results);
}