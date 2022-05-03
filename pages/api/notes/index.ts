import { NextApiRequest, NextApiResponse } from 'next';

import Note from '../../../models/Note';
import connectDB from '../../../utils/connectDB.js';

connectDB(process.env.MONGO_URI);

const allNotesHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const notes = await Note.find({});

        res.status(200).json({ success: true, data: notes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const newNote = await Note.create(req.body);

        res.status(201).json({ success: true, data: newNote });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};

export default allNotesHandler;
