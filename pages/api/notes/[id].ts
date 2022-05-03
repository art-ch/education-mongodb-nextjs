import { NextApiRequest, NextApiResponse } from 'next';

import Note from '../../../models/Note';
import connectDB from '../../../utils/connectDB.js';

connectDB(process.env.MONGO_URI);

const singleNoteHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method
  } = req;

  switch (method) {
    case 'GET':
      try {
        const note = await Note.findById(id);
        console.log(note);

        if (!note) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'PUT':
      try {
        const note = await Note.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });

        if (!note) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: note });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'DELETE':
      try {
        const deletedNote = await Note.findByIdAndDelete(id);

        if (!deletedNote) {
          return res.status(400).json({ success: false });
        }

        res.status(200).json({ success: true, data: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
    default:
      res.status(400).json({ success: false, error: 'default' });
  }
};

export default singleNoteHandler;
