import mongoose from "mongoose";
const { Schema } = mongoose;

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
});

const Author = mongoose.model("Author", authorSchema);

export default Author;
