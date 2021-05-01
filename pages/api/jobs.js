import axios from 'axios';
import { isAfter } from 'date-fns';
import { chain, merge } from 'lodash';
import qs from 'query-string';
import { getYesterdaysDate } from 'utils/date';

export default async (req, res) => {
  const response = await axios(`https://jobs.github.com/positions.json?${qs.stringify(req.query)}`);
  const jobs = chain(response.data)
    .map((j) => merge(j, { isNew: isAfter(getYesterdaysDate(), new Date(j.created_at)) }))
    .orderBy((j) => new Date(j.created_at), ['asc']);

  res.status(200).json({ jobs });
};