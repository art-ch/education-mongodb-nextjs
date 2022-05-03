import { Schema, model, models } from 'mongoose';

const noteSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title is Required'],
    unique: true,
    trim: true,
    maxlength: [40, 'Title cannot be longer than 40 characters']
  },
  body: {
    type: String,
    required: [true, 'Body is Required']
  }
});

const Note = models.notes || model('notes', noteSchema);

export default Note;
