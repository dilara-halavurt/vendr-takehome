import { VercelRequest, VercelResponse } from '@vercel/node'
import axios from 'axios';

export default async (req: VercelRequest, res: VercelResponse) => {
  const response= await makeApiCall();
  return res.json({ catFact: response.data.fact })
}

export async  function makeApiCall(){

// Make a request for a user with a given ID
return await axios.get('https://catfact.ninja/fact')
  
}