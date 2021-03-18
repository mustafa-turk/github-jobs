import axios from 'axios';

export default async (req, res) => {
  const { id } = req.query;
  const response = await axios(`https://jobs.github.com/positions/${id}.json`);
  res.status(200).json({ details: response.data });
};
