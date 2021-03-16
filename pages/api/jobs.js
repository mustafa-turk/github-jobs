import axios from 'axios';
import qs from 'query-string';

export default async (req, res) => {
  console.log(`https://jobs.github.com/positions.json?${qs.stringify(req.query)}`);
  const response = await axios(`https://jobs.github.com/positions.json?${qs.stringify(req.query)}`);
  res.status(200).json({ jobs: response.data });
};
