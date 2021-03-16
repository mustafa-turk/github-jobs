import axios from 'axios';

export default async (_, res) => {
  const response = await axios('https://jobs.github.com/positions.json');
  res.status(200).json({ jobs: response.data });
};
