import { Schema, model } from 'mongoose';

const storySchema = new Schema({
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

const Story = model('Story', storySchema);
