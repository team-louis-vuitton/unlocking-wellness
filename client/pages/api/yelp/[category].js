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
  const data = await fetch(`http://localhost:3001/yelp`, searchObj);
  const results = await data.json();
  res.send(results);
}

